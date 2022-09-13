<script setup>
import EditablePage from './components/EditablePage.vue';
import Menu from './components/Menu.vue';
</script>

<template>
	<div class="app-container">
		<Menu/>
		<EditablePage/>
	</div>
</template>

<style scoped>
	.app-container {
		display: grid;
		grid-template-columns: 0.2fr 1fr;
	}
</style>
