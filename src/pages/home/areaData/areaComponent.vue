<template>
    <chart :options="mapOptions" ref="runTimes_creditChart" :style="{height: '100% ', width: '100%'}"></chart>
</template>

<script>
import 'echarts/map/js/china.js'
export default {
    props: {
        areaData: {
            type: Array,
            default(){
                return []
            }
        },
        background: {
            type: String,
            default: 'rgba(0,0,0,0)'
        },
        isRoam: {
            type: Boolean,
            default: true,
        }
    },
    mounted(){
        window.addEventListener("resize", this.resizeTheChart);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.resizeTheChart);
    },
    methods: {
        resizeTheChart() {
            if (this.$refs.runTimes_creditChart) {
                this.$refs.runTimes_creditChart.resize();
            }
            if (this.$refs.transactions_creditChart) {
                this.$refs.transactions_creditChart.resize();
            }
            if (this.$refs.registers_creditChart) {
                this.$refs.registers_creditChart.resize();
            }
        },
    },
    computed: {
        mapOptions(){
            return {
                backgroundColor: this.background,
                title: {
                    text: '全国商品销量',
                    subtext: '',
                    x:'center'
                },
                // type: '',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params) {
                        if(typeof params.data == 'undefined'){
                            return ''
                        }
                        var res = "总销量:"+ params.data.value + '</br>' + params.data.remark;
                        return res;
                    }
                },
                dataRange: {
                    show: true,
                    min: 0,
                    max: 50000,
                    // text: ['High', 'Low'],
                    splitNumber: 5,
                    // splitList: [
                    //     {start: 0},
                    //     {start: 0, end: 1000,label :'xiao'},
                    //     {start: 1000, end: 2000, label: 'da'},
                    //     {start: 6000, end: 1000, label: 'ssss'},
                    //     {start: 10000, end: 20000, label: '10 到 200（自定义label）'},
                    //     {end: 20000}
                    // ],
 
                    realtime: true,
                    color: ['orange', 'yellow', 'lightskyblue','red']
                },
                // legend: {
                //     orient: 'vertical',
                //     x:'left',
                //     data:['销量top']
                // },
                geo: { // 这个是重点配置区
                    map: 'china', // 表示中国地图
                    roam: this.isRoam,
                    label: {
                        normal: {
                            show: true, // 是否显示对应地名
                            textStyle: {
                                color: 'rgba(0,0,0,0.4)'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(0, 0, 0, 0.2)'
                        },
                        emphasis: {
                            areaColor: null,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 20,
                            borderWidth: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                },
                //配置属性
                series: [{
                    type: 'scatter',
                    coordinateSystem: 'geo' // 对应上方配置
                },{
                    name: '销量top',
                    type: 'map',
                    geoIndex: 0,
                    // label: {
                    //     show: true,
                    //     position: 'inside'
                    // },
                    // mapType: 'china',
                    // roam: true,
                    // label: {
                    //     normal: {
                    //         show: true  //省份名称
                    //     },
                    //     emphasis: {
                    //         show: false
                    //     }
                    // },
                    data: this.areaData  //数据
                }]
            }
        }
    }
}
</script>

<style>

</style>