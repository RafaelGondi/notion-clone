<template>
	<h2>Test</h2>
	<contenteditable
		tag="p"
		v-model="message"
		:noNl="true"
		:noHtml="true"
		@returned="enterPressed"
	/>
	<contenteditable
		tag="p"
		v-model="message2"
		:noNl="true"
		:noHtml="true"
		@returned="enterPressed"
	/>
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
			message2: ""
		}
	},
	methods : {
		enterPressed(){
			console.log('Enter Pressed');
		}
	}
}
</script>