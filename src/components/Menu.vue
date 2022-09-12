<template>
	<div
		class="side-menu"
	>
		<div class="side-menu-header">Notion Clone</div>
		<div><div class="side-menu-header">Logged in as {{ fileStore.userName }}</div></div>
	</div>
</template>

<script>
import { useFileStore } from '../store/FileStore';

export default {
	setup () {
		const fileStore = useFileStore();

		return {
			fileStore,
		}
	}
}
</script>

<style lang="scss" scoped>
	@import 'node_modules/@sysvale/cuida/dist/tokens.scss';
	.side-menu {
		height: 100%;
		width: 250px;
		background-color: $al-50;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
	}

	.side-menu-header {
		margin: mTRBL(6, 0, 0, 6);
		@include heading-3;
		font-weight: $font-weight-semibold;
	}
</style>