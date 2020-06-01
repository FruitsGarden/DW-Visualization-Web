<template>
    <div style="max-width: 1000px;margin: 0 auto" v-loading="is_loading">
        <el-row :gutter="10" class="panel-group">
            <el-col :span="6" class="card-panel-col">
                <div class="card-panel" @click="handleSetLineChartData('dayCount')">
                    <div class="card-panel-icon-wrapper icon-people">
                        <img src="./activeTotalData/images/day1.svg" alt="">
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            日活
                        </div>
                        <count-to v-if="activeTotalData.dayCount.totalData" :start-val="0" :end-val="activeTotalData.dayCount.totalData" :duration="1000" class="card-panel-num" />
                    </div>
                </div>
            </el-col>
            <el-col :span="6" class="card-panel-col">
                <div class="card-panel" @click="handleSetLineChartData('wkCount')">
                    <div class="card-panel-icon-wrapper icon-message">
                        <img src="./activeTotalData/images/week7.svg" alt="">
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text" >
                            周活
                        </div>
                        <count-to v-if="activeTotalData.wkCount.totalData" :start-val="0" :end-val="activeTotalData.wkCount.totalData" :duration="1000" class="card-panel-num" />
                    </div>
                </div>
            </el-col>
            <el-col :span="6" class="card-panel-col">
                <div class="card-panel" @click="handleSetLineChartData('monCount')">
                    <div class="card-panel-icon-wrapper icon-money">
                        <img src="./activeTotalData/images/month31.svg" alt="">
                    </div>
                    <div class="card-panel-description" >
                        <div class="card-panel-text">
                            月活
                        </div>
                        <count-to v-if="activeTotalData.monCount.totalData" :start-val="0" :end-val="activeTotalData.monCount.totalData" :duration="1000" class="card-panel-num" />
                    </div>
                </div>
            </el-col>
            <el-col :span="6" class="card-panel-col">
                <div class="card-panel" @click="handleSetLineChartData('monCount')">
                    <div class="card-panel-icon-wrapper icon-money">
                        <img src="./convertData/images/dashboard.svg" alt="">
                    </div>
                    <div class="card-panel-description" >
                        <div class="card-panel-text">
                            转化率
                        </div>
                        <div class="card-panel-num">{{convertRate}}</div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <retain-chart style="margin-bottom: 20px;" :lineData="retainData"></retain-chart>
        <gmv-component style="margin-bottom: 20px;" :lineData="gmvData"></gmv-component>
        <div style="display: flex;margin-bottom: 20px;">
            <funnel-chart :funnelData="convertData"></funnel-chart>
            <map-pie :mapData="mapData"></map-pie>
        </div>
        
    </div>
    
</template>

<script>
import CountTo from 'vue-count-to'
import {homeService} from '@/service/index.js'
import retainChart from './dashboard/retainChart.vue'
import gmvComponent from './GMVData/gmvComponent.vue'
import funnelChart from './dashboard/funnelChart.vue'
import mapPie from './dashboard/mapPie.vue'
export default {
    components: {
        CountTo,
        retainChart,
        gmvComponent,
        funnelChart,
        mapPie,
    },
    data(){
        return {
            is_loading: false,
            mapData: [],
            activeTotalData: {
                dayCount: {},
                wkCount: {},
                monCount: {}
            },
            convertData: [],
            convertRate: 0,
            configData:[],
            gmvData: [],
            retainData: []
        }
    },
    methods: {
        handleSetLineChartData(type) {
            this.$emit('handleSetLineChartData', type)
        },
        async getData(){
            let date = '2020-05-04',
                startDate = '2020-05-04',
                endDate = '2020-05-04';
            try{
                this.is_loading = true
                await Promise.all([
                    homeService.getActiveTotalData(date),
                    homeService.getConvertData(date),
                    homeService.getAreaData(),
                    homeService.getRetainData(),
                    homeService.getGMVData(startDate, endDate),

                    homeService.getUserConvertCount(date),
                    homeService.getNewMidCount(date),
                    homeService.getSilentCount(date),
                    homeService.getWastageCount(date),
                ]).then(data =>{
                    console.log(data)
                    //用户活跃数据
                    this.activeTotalData = data[0].data.reduce((obj, item, index) =>{
                        return {
                            ...obj,
                            [item.id]: item,
                        }
                    },{})
                    //转化率数据
                    this.convertData = data[1].data

                    // 准化率
                    this.convertRate = (this.convertData[2].value/this.convertData[0].value) * 100 + '%'

                    //地图数据
                    this.mapData = data[2].data.sort((a, b) =>{
                        if(a.value < b.value) {
                            return -1
                        }
                    }).reverse().slice(0, 4)
                    //底部动态列表
                    this.retainData = data[3].data

                    this.gmvData = data[4].data
                    this.configData = data[8].data



                    this.is_loading = false
                }).catch(error =>{
                    this.$message({
                        type: 'error',
                        message: error.message
                    })
                    this.is_loading = false
                }).finally(() =>{
                    this.is_loading = false
                })
            } catch(error){
                this.$message({
                    type: 'error',
                    message: error.message
                })
                this.is_loading = false
            }
        }
    },
    async mounted(){
        await this.getData()
    }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    // &:hover {
    //   .card-panel-icon-wrapper {
    //     color: #fff;
    //   }

    //   .icon-people {
    //     background: #40c9c6;
    //   }

    //   .icon-message {
    //     background: #36a3f7;
    //   }

    //   .icon-money {
    //     background: #f4516c;
    //   }

    //   .icon-shopping {
    //     background: #34bfa3
    //   }
    // }

    .icon-people {
        color: #34bfa3
    //   color: #40c9c6;
    }

    .icon-message {
        color: #f4516c;
      
    }

    .icon-money {
        color: #36a3f7;
    }

    .icon-shopping {
      
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
      img{
          height: 48px;
          width: 48px;
        }
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
