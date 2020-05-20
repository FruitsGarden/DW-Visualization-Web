<template>
	<div class="bottom-charts">
		<div class="bc-chart-item">
			<div class="bcci-header">日活</div>
			<dv-water-level-pond :config="config" style="margin: 0 auto;width:60%;height:200px" />
		</div>

		<dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" />

		<div class="bc-chart-item">
			<div class="bcci-header">周活</div>
			<dv-water-level-pond :config="config" style="margin: 0 auto;width:60%;height:200px" />
		</div>

		<dv-decoration-2 class="decoration-2" :reverse="true" style="width:5px;" />

		<div class="bc-chart-item">
			<div class="bcci-header">月活</div>
			<dv-water-level-pond :config="config" style="margin: 0 auto;width:60%;height:200px" />
		</div>

		<dv-decoration-2 class="decoration-3" :reverse="true" style="width:5px;" />

	</div>
</template>

<script>
import LabelTag from './LabelTag'

export default {
	name: 'BottomCharts',
	components: {
		LabelTag
	},
	data () {
		return {
			config:{
				data: [66, 45],
				shape: 'roundRect'
			},	
		}
	}
}
</script>

<style lang="scss">
.bottom-charts {
	width: 100%;
	height: 100%;
	display: flex;
	position: relative;

	.bc-chart-item {
		width: 33%;
		height: 100%;
		padding-top: 20px;
		box-sizing: border-box;
		.bcci-header {
			height: 50px;
			text-align: center;
			line-height: 50px;
			font-size: 20px;
		}
	}

	

	.dv-active-ring-chart {
		height: calc(100% - 80px);
	}

	.label-tag {
		height: 30px;
	}

	.active-ring-name {
		font-size: 18px !important;
	}

	.decoration-1, .decoration-2, .decoration-3 {
		display: absolute;
		left: 0%;
	}
}
</style>
