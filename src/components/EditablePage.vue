<template>
	<div
		v-if="showTagsMenu"
		class="optionsMenu"
	>
		<div
			v-for="(option, index) in allowedTags"
			class="option"
			@click="changeTag(option)"
		>
			<div>{{ option.label }}</div>
		</div>
	</div>
	<div
		v-for="(content, index) in fileStore.file.content"
		:key="index"
	>
		<component
			contenteditable="true"
			:placeholder="content.placeholder"
			:ref="`${fileStore.file.metadata.dom_id}-${index}`"
			:is="content.tag"
			@keyup.enter="enterPressed($event, index)"
			@keypress="slashHandler($event, index)"
			@keyup.esc="showTagsMenu = false"
		>
			{{ content.value }}
		</component>
	</div>
</template>
 
<script>
import allowedTags from '../utils/constants/allowedTags';
import { useFileStore } from '../store/FileStore';

export default {
	setup () {
		const fileStore = useFileStore();

		return {
			fileStore,
		}
	},
	
	data() {
		return {
			allowedTags,
			tempIndex: 0,
			showTagsMenu: false,
		}
	},

	methods : {
		enterPressed(ev, index){
			ev.preventDefault();

			const newTag = {
				tag: 'p',
				value: '',
				placeholder: 'type / for commands',
			};

			this.fileStore.addContent(newTag, index + 1);

			this.$nextTick(() => {
				this.$refs[`${this.fileStore.file.metadata.dom_id}-${index + 1}`][0].focus();
			});
		},

		slashHandler(ev, index) {
			const isTagEmpty =
				this.$refs[`${this.fileStore.file.metadata.dom_id}-${index}`][0].innerText.length < 1;

			if (ev.key !== '/' || !isTagEmpty) {
				return
			}
		
			this.showTagsMenu = true;
			this.tempIndex = index;
		},

		changeTag(option) {
			const tagData = {
				tag: option.tag,
				editable: option.editable,
				value: option.value,
				placeholder: allowedTags.find((item) => item.tag === option.tag).placeholder,
			};

			const newTag = {
				tag: 'p',
				value: '',
			};

			this.fileStore.changeTag(tagData, this.tempIndex);

			this.$nextTick(() => {
				this.$refs[`${this.fileStore.file.metadata.dom_id}-${this.tempIndex}`][0].focus();
			});

			this.fileStore.addContent(newTag, this.tempIndex + 1);
			this.showTagsMenu = false;
		},
	}
}
</script>
<style lang="scss">
	@import 'node_modules/@sysvale/cuida/dist/tokens.scss';
	.optionsMenu {
		box-shadow: rgb(0 0 0 / 5%) 0px 0px 10px, rgb(0 0 0 / 5%) 0px 5px 10px, rgb(0 0 0 / 5%) 0px 2px 4px, rgb(0 0 0 / 5%) 0px 10px 20px;
		border-radius: 12px;
		border: 1px solid rgb(231, 234, 240);
		background-color: rgb(255, 255, 255);
		padding: 12px;
		width: fit-content;
		position: absolute;
		margin-left: 20px;
		// margin-top: -50px;
	}

	.option {
		margin-bottom: 8px;
		padding: 4px;
		border-radius: 4px;
		cursor: pointer;
	}

	.option:hover {
		background-color: rgb(233, 232, 238);
	}

	body {
		color: $n-900;
	}

	[contentEditable=true]:empty:focus:before{
		content:attr(placeholder);
		color: $n-200;
		font-style:italic;
	}

	p {
		color: $n-800;
	}
</style>