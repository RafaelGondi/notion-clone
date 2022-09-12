<template>
	<h2>Test</h2>
	<div
		v-for="(content, index) in contentTree"
		:key="index"
	>
		<contenteditable
			v-model="content.value"
			:ref="`el${index}`"
			:tag="content.tag"
			:noNl="true"
			:noHtml="true"
			@returned="enterPressed(index)"
		/>
	</div>
</template>
 
<script>
import contenteditable from 'vue-contenteditable'; // Not needed it registered globally
export default {
	components : {
		contenteditable
	},
	data() {
		return {
			message: "hello",
			message2: "",
			contentTreeLength: 0,
			contentTree: [
				{
					tag: 'p',
					value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat.`,
				},
				{
					tag: 'p',
					value: `Ut enim ad minima veniam, quis nostrum exercitationem ullam
					corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
					Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
					nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
					nulla pariatur?`,
				},
			],
		}
	},
	methods : {
		enterPressed(index){
			console.log('🚀 -> file: EditablePage.vue -> line 50 -> index', index);
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
	}
}
</script>