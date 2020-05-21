<template>
    <div id="data-view">
        <dv-full-screen-container>
            <div class="main-header">
                电商数据可视化大屏
            </div>

            <dv-border-box-1 class="main-container">
                <dv-border-box-3 class="left-chart-container">
                    <Left-Chart-1 :activeTotalData="activeTotalData" /> 
                    <Left-Chart-2 :mapData="mapData"/>
                    <Left-Chart-3 :configData="configData"/>
                </dv-border-box-3>

                <div class="right-main-container">
                    <div class="rmc-top-container">
                        <dv-border-box-3 class="rmctc-left-container">
                            <!-- <Center-Cmp /> -->
                            <area-component  :areaData="mapData" :isRoam="false"></area-component>
                        </dv-border-box-3>
                        <div class="rmctc-right-container">
                            <dv-border-box-3 class="rmctc-chart-1">
                                <div>
                                    <div class="date-text">今天是&nbsp;&nbsp;&nbsp;{{currentDate}}</div>
                                    <div class="date-text" v-if="gmvData.length">成交量&nbsp;&nbsp;&nbsp;{{gmvData[0].gmv_count}}&nbsp;件</div>
                                    <div class="date-text" v-if="gmvData.length">成交额&nbsp;&nbsp;&nbsp;{{gmvData[0].gmv_amount}}&nbsp;元</div>
                                </div>
                                
                                
                            </dv-border-box-3>
                            <dv-border-box-4 class="rmctc-chart-2" :reverse="true">
                                <Right-Chart-1 :convertData="convertData" />
                            </dv-border-box-4>
                        </div>
                    </div>
                    <dv-border-box-4 class="rmc-bottom-container">
                        <!-- <Bottom-Charts /> -->
                        <div style="padding: 20px;width:100%;height:100%">
                            <dv-scroll-board :config="retainData"/>
                        </div>
                        
                    </dv-border-box-4>
                </div>
            </dv-border-box-1>
        </dv-full-screen-container>
    </div>
</template>

<script>
import {homeService} from '@/service/index.js'
import LeftChart1 from './datav/LeftChart1'
import LeftChart2 from './datav/LeftChart2'
import LeftChart3 from './datav/LeftChart3'

import CenterCmp from './datav/CenterCmp'

import RightChart1 from './datav/RightChart1'
import RightChart2 from './datav/RightChart2'

import BottomCharts from './datav/BottomCharts'
import areaComponent from './home/areaData/areaComponent.vue'

import CountTo from 'vue-count-to'
export default {
    name: 'DataView',
    components: {
        LeftChart1,
        LeftChart2,
        LeftChart3,
        CenterCmp,
        RightChart1,
        RightChart2,
        BottomCharts,
        areaComponent,
        CountTo,
    },
    data () {
        return {
            mapData: [],
            timer: '',
            currentDate: '',
            activeTotalData: [],
            convertData: [],
            configData:[],
            gmvData: [],
            retainData: {
                header: ['时间', '新增用户', '一天后', '两天后', '三天后', '四天后', '五天后','六天后',],
                data: [],
            }
        }
    },
    methods: {
        async getData(){
            let date = '2020-05-04',
                startDate = '2020-05-04',
                endDate = '2020-05-04';
            await Promise.all([
                homeService.getActiveTotalData(date),
                homeService.getConvertData(date),
                homeService.getAreaData(),
                homeService.getRetainData(),
                homeService.getGMVData(),

                homeService.getUserConvertCount(date),
                homeService.getNewMidCount(date),
                homeService.getSilentCount(date),
                homeService.getWastageCount(date),
            ]).then(data =>{
                console.log(data)
                //用户活跃数据
                this.activeTotalData = data[0].data
                //转化率数据
                this.convertData = data[1].data
                //地图数据
                this.mapData = data[2].data
                //底部动态列表
                let bottomList = data[3].data.map((item, index) =>{
                    return Object.values(item).map(it =>{
                        return it.toString()
                    })
                })
                this.retainData = {
                    header: ['时间', '新增用户', '一天后', '两天后', '三天后', '四天后', '五天后','六天后',],
                    data: bottomList,
                    index: true,
                }
                this.gmvData = data[4].data
                this.configData = data[8].data
            })
        },
        startTime(){
            var today=new Date();
            return `${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日`
        }
    },
    async mounted(){
        this.currentDate = this.startTime()
        await this.getData()
    },
}
</script>

<style lang="scss">
    #data-view {
    width: 100%;
    height: 100%;
    background-color: #030409;
    color: #fff;

    #dv-full-screen-container {
        background-image: url('./datav/img/bg.png');
        background-size: 100% 100%;
        box-shadow: 0 0 3px blue;
        display: flex;
        flex-direction: column;
    }

    .main-header {
        height: 80px;
        width: 100%;
        line-height: 80px;
        text-align: center;
        font-size: 30px;
    }

    .main-container {
        height: calc(100% - 80px);

        .border-box-content {
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        }
    }

    .left-chart-container {
        width: 22%;
        padding: 10px;
        box-sizing: border-box;

        .border-box-content {
        flex-direction: column;
        }
    }

    .right-main-container {
        width: 78%;
        padding-left: 5px;
        box-sizing: border-box;
    }

    .rmc-top-container {
        height: 65%;
        display: flex;
    }

    .rmctc-left-container {
        width: 65%;
    }

    .rmctc-right-container {
        width: 35%;
    }

    .rmc-bottom-container {
        height: 35%;
    }

    .rmctc-chart-1{
        height: 40%;
    }
        .rmctc-chart-2 {
            height: 60%;
        }
    }


    .card-panel {
        height: 108px;
        cursor: pointer;
        font-size: 12px;
        position: relative;
        overflow: hidden;
        color: #fff;
        border: 1px solid #fff;
        // background: #fff;
        box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
        border-color: rgba(0, 0, 0, .05);

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
                color: #fff;
                font-size: 16px;
                margin-bottom: 12px;
            }

            .card-panel-num {
                font-size: 20px;
            }
        }
    }


    .date-text{
        height: 60px;
        width: 100%;
        color: #fff;
        font-size: 30px;
        padding: 20px 0;
        text-indent: 40px;
    }
</style>
