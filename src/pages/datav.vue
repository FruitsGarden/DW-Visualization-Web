<template>
    <div id="data-view">
        <dv-full-screen-container>
            <div class="main-header">
                电商数据可视化大屏
            </div>

            <dv-border-box-1 class="main-container">
                <dv-border-box-3 class="left-chart-container">
                    <Left-Chart-1 />
                    <Left-Chart-2 />
                    <Left-Chart-3 />
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
                                    <div style="height: 60px;width: 100%;color: #fff;fontSize: 30px;padding: 20px 0;text-indent: 40px;">今天是</div>
                                <div style="height: 60px;width: 100%;color: #fff;fontSize: 30px;padding: 20px 0;text-indent: 40px;">{{currentDate}}</div>
                                </div>
                                
                                
                            </dv-border-box-3>
                            <dv-border-box-4 class="rmctc-chart-2" :reverse="true">
                                <Right-Chart-1 />
                            </dv-border-box-4>
                        </div>
                    </div>
                    <dv-border-box-4 class="rmc-bottom-container">
                        <!-- <Bottom-Charts /> -->
                        <div style="padding: 20px;width:100%;height:100%">
                            <dv-scroll-board :config="config"/>
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
    },
    data () {
        return {
            mapData: [],
            timer: '',
            currentDate: '',
            config: {
                header: ['列1', '列2', '列3'],
                data: [
                    ['行1列1', '行1列2', '行1列3'],
                    ['行2列1', '行2列2', '行2列3'],
                    ['行3列1', '行3列2', '行3列3'],
                    ['行4列1', '行4列2', '行4列3'],
                    ['行5列1', '行5列2', '行5列3'],
                    ['行6列1', '行6列2', '行6列3'],
                    ['行7列1', '行7列2', '行7列3'],
                    ['行8列1', '行8列2', '行8列3'],
                    ['行9列1', '行9列2', '行9列3'],
                    ['行10列1', '行10列2', '行10列3']
                ],
            }
        }
    },
    methods: {
        async getData(){
            await homeService.getAreaData().then(data =>{
                this.mapData = data
            })
        },
        startTime(){
            var today=new Date();
            return `${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日`
        }

//             document.getElementById('txt').innerHTML=strDate;
//             t=s
//             }

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
</style>
