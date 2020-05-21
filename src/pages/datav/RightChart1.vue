<template>
	<div class="right-chart-1">
		<div class="rc1-header">订单转化率</div>

		<div class="rc1-chart-container">
			<div class="left">
				<div class="number" v-if="convertData.length">{{convertData[2].value}}</div>
				<div>成交总数</div>
			</div>

			<dv-capsule-chart class="right" :config="convertDataList" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'RightChart1',
	data () {
		return {

		}
	},
	computed: {
		convertDataList(){
			return {
				data: this.convertData
			}
		}
	},
	props: {
		convertData: {
			type: Array,
			default: function(){
				return []
			}
		}
	}
}
</script>

<style lang="scss">
.right-chart-1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .rc1-header {
    font-size: 24px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
  }

  .rc1-chart-container {
    flex: 1;
    display: flex;
  }

  .left {
    width: 30%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .number {
      font-size: 34px;
      color: #096dd9;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }

  .right {
    flex: 1;
    padding-bottom: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
}
</style>
