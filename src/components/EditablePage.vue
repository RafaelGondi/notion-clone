<template>
	<div
		v-for="(content, index) in fileStore.files[0].content"
		:key="index"
	>
		<contenteditable
			v-model="content.value"
			:placeholder="content.placeholder"
			:ref="`el${index}`"
			:contenteditable="content.editable"
			:tag="content.tag"
			:noNl="true"
			:noHtml="true"
			@returned="enterPressed(index)"
			@keypress="slashHandler($event, index)"
			@keyup.esc="showTagsMenu = false"
		/>
	</div>
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
</template>
 
<script>
import contenteditable from 'vue-contenteditable';
import allowedTags from '../utils/constants/allowedTags';
import { useFileStore } from '../store/FileStore';

export default {
	components : {
		contenteditable
	},

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
		enterPressed(index){
			const newTag = {
				tag: 'p',
				value: '',
				placeholder: 'type / for commands',
			};

			this.fileStore.addContent(newTag, index + 1);

			this.$nextTick(() => {
				this.$refs[`el${index + 1}`][0].$el.focus();
			});
		},

		slashHandler(ev, index) {
			const isTagEmpty = this.$refs[`el${index}`][0].$el.innerText.length < 1;

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
				this.$refs[`el${this.tempIndex}`][0].$el.focus();
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
		margin-top: -100px;
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