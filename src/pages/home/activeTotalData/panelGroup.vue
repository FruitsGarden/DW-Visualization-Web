<template>
    <div style="width: 80%;margin: 0 auto">
        <el-row :gutter="40" class="panel-group">
            <el-col :span="8" class="card-panel-col">
                <div class="card-panel" @click="handleSetLineChartData('dayCount')">
                    <div class="card-panel-icon-wrapper icon-people">
                        <img src="./images/day1.svg" alt="">
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            日活
                        </div>
                        <count-to v-if="activeTotalData.dayCount.totalData" :start-val="0" :end-val="activeTotalData.dayCount.totalData" :duration="2600" class="card-panel-num" />
                    </div>
                </div>
            </el-col>
            <el-col :span="8" class="card-panel-col">
                <div class="card-panel" @click="handleSetLineChartData('wkCount')">
                    <div class="card-panel-icon-wrapper icon-message">
                        <img src="./images/week7.svg" alt="">
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text" >
                            周活
                        </div>
                        <count-to v-if="activeTotalData.wkCount.totalData" :start-val="0" :end-val="activeTotalData.wkCount.totalData" :duration="3000" class="card-panel-num" />
                    </div>
                </div>
            </el-col>
            <el-col :span="8" class="card-panel-col">
                <div class="card-panel" @click="handleSetLineChartData('monCount')">
                    <div class="card-panel-icon-wrapper icon-money">
                        <img src="./images/month31.svg" alt="">
                    </div>
                    <div class="card-panel-description" >
                        <div class="card-panel-text">
                            月活
                        </div>
                        <count-to v-if="activeTotalData.monCount.totalData" :start-val="0" :end-val="activeTotalData.monCount.totalData" :duration="3200" class="card-panel-num" />
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
    
</template>

<script>
import CountTo from 'vue-count-to'

export default {
    components: {
        CountTo
    },
    props: {
        activeTotalData: {
            type: Object, 
            default: function(){
                return {
                    wkCount: {totalData: 0},
                    monCount: {totalData: 0},
                    dayCount: {totalData: 0},
                }
            }
        }
    },
    computed: {
        countData(){
            // let obj;
            return this.activeTotalData.reduce((obj, item, index) =>{
                return {
                    ...obj,
                    [item.id]: item,
                }
            },{}) 
            // return obj
        }
    },
    methods: {
        handleSetLineChartData(type) {
            this.$emit('handleSetLineChartData', type)
        }
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
