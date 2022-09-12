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
			@returned="enterPressed"
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
		enterPressed(){
			const newTag = {
				tag: 'p',
				value: '',
			};

			this.contentTree.push(newTag);
			this.$nextTick(() => {
				this.contentTreeLength++;
				this.$refs[`el${this.contentTreeLength}`][0].$el.focus();
			});
		},
	}
}
</script>