<template>
	<div
		class="side-menu"
	>
		<div class="side-menu-header">Notion Clone</div>
	</div>
</template>

<script>
export default {
	setup () {
		

		return {}
	}
}
</script>

<style lang="scss" scoped>
	@import 'node_modules/@sysvale/cuida/dist/tokens.scss';
	.side-menu {
		height: 100%;
		width: 300px;
		background-color: $al-50;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
	}

	.side-menu-header {
		margin: mTRBL(6, 0, 0, 6);
		@include heading-3;
		font-weight: $font-weight-semibold;
	}
</style>