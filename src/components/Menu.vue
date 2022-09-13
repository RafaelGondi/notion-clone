<template>
	<div
		class="side-menu"
	>
		<div>
			<div class="side-menu-header">Notion Clone</div>
	
			<div class="filesContainer">
				<div
					v-for="(files, index) in fileStore.files"
					class="fileNameContainer"
					:class="index === fileStore.currentFile ? 'active-option' : ''"
				>
					<p
						class="fileName"
						@click="changeFile(index)"
					>
						{{ files.metadata.name }}
					</p>
				</div>
			</div>
		</div>

		<div class="add-page-btn">
			<p>+ New page</p>
		</div>
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
	},

	methods: {
		changeFile(index) {
			this.fileStore.changeFile(index);
		}
	},
}
</script>

<style lang="scss" scoped>
	@import 'node_modules/@sysvale/cuida/dist/tokens.scss';
	.side-menu {
		height: 100vh;
		width: 250px;
		background-color: $bn-50;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.side-menu-header {
		margin: mTRBL(6, 0, 0, 6);
		@include heading-3;
		font-weight: $font-weight-semibold;
	}

	.fileName {
		margin: mTRBL(6, 0, 0, 6);
		padding: py(3);
		cursor: pointer;
	}
	
	.fileNameContainer:hover {
		background-color: $bn-100;
	}

	.active-option {
		background-color: $bn-200;
	}

	.add-page-btn {
		cursor: pointer;
		@include subheading-2;
		padding: pTRBL(3, 0, 3, 0);
		border-top: 1px solid $n-50;
	}

	.add-page-btn > p {
		margin: ml(4);
	}

	.add-page-btn:hover {
		background-color: $n-20;
	}
</style>