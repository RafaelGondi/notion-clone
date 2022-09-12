<template>
	<h2>Test</h2>
	<div
		v-for="(content, index) in contentTree"
		:key="index"
	>
		<contenteditable
			v-model="content.value"
			:ref="`el${index}`"
			:contenteditable="content.editable"
			:tag="content.tag"
			:noNl="true"
			:noHtml="true"
			@returned="enterPressed(index)"
			@keypress="slashHandler($event, index)"
		/>
	</div>
	<div
		v-if="showTagsMenu"
		class="optionsMenu"
	>
		<div
			v-for="(option, index) in allowedTags"
			class="opt"
			@click="changeTag(option)"
		>
			<div>{{ option.label }}</div>
		</div>
	</div>
</template>
 
<script>
import contenteditable from 'vue-contenteditable';
import allowedTags from '../utils/constants/allowedTags';

export default {
	components : {
		contenteditable
	},
	
	data() {
		return {
			allowedTags,
			contentTree: [
				{
					tag: 'p',
					value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				},
				{
					tag: 'p',
					value: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
				},
			],
			contentTreeLength: 2,
			tempIndex: 0,
			showTagsMenu: false,
		}
	},

	methods : {
		enterPressed(index){
			const newTag = {
				tag: 'p',
				value: '',
			};

			this.contentTree.splice(index + 1, 0, newTag);

			this.$nextTick(() => {
				this.contentTreeLength++;
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
			this.contentTree[this.tempIndex].tag = option.tag;
			this.contentTree[this.tempIndex].editable = option.editable;

			this.$nextTick(() => {
				this.$refs[`el${this.tempIndex}`][0].$el.focus();
			});

			const newTag = {
				tag: 'p',
				value: '',
			};

			this.contentTree.splice(this.tempIndex + 1, 0, newTag);

			this.showTagsMenu = false;
		},
	}
}
</script>
<style>
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

	.opt {
		margin-bottom: 8px;
		padding: 4px;
		border-radius: 4px;
		cursor: pointer;
	}

	.opt:hover {
		background-color: rgb(233, 232, 238);
	}
</style>