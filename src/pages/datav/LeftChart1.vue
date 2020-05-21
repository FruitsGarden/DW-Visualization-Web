<template>
	<div class="left-chart-1">
		<div class="lc1-header">用户活跃量</div>
		<div class="card-panel"
			v-for="(item, index) in activeTotalDataList"
			:key="index">
			<div class="card-panel-icon-wrapper icon-people">
				<img :src="item.imgUrl" alt="">
			</div>
			<div class="card-panel-description">
				<div class="card-panel-text">
					{{item.title}}
				</div>
				<count-to 
					v-if="item.totalData" 
					:start-val="0" 
					:end-val="item.totalData" :duration="2600" class="card-panel-num" />
			</div>
		</div>
		<dv-decoration-2 style="height:10px;" />
	</div>
</template>

<script>
import CountTo from 'vue-count-to'
import day1 from './img/day1.svg'
import week7 from './img/week7.svg'
import month31 from './img/month31.svg'

export default {
	components: {
		CountTo,
	},
	name: 'LeftChart1',
	data () {
		return {
			week7,
			month31,
			day1,
		}
	},
	computed: {
		activeTotalDataList(){
			return this.activeTotalData.map(item =>{
				let imgUrl = ''
				if(item.id == 'dayCount'){
					imgUrl = day1
				} else if(item.id == 'wkCount'){
					imgUrl = week7
				} else {
					imgUrl = month31
				}
				return {
					...item, 
					imgUrl :  imgUrl
				}
			})
		}
	},
	props: {
		activeTotalData: {
			type: Array,
			default: []
		}
	}
}
</script>

<style lang="scss" scoped>
.left-chart-1 {
  width: 100%;
  height: 37%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;

  .lc1-header {
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
}
</style>
