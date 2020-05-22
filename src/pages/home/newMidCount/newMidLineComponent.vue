<template>
    <chart :options="lineOptions" ref="runTimes_creditChart" :style="{width: '100%'}"></chart>
</template>

<script>
export default {
    props: {
        lineData: {
            type: Array,
            default: function(){
                return []
            }
        },
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
        lineOptions(){
            let xAxisList = [],
                yAxisList = [];
            if(!Array.isArray(this.lineData)){
                return {}
            }
            xAxisList = this.lineData.reduce((arr, element) => {
                return [
                    ...arr,
                    element.createDate
                ]
            },[]);

            yAxisList = this.lineData.reduce((arr, element) => {
                return [
                    ...arr,
                    element.newMidCount
                ]
            },[]);

            return {
                title: { 
                    show: true, //显示折线图
                    text: `每日新增设备`, //标题文字
                    left: 'center', //配置title的位置
                    padding: [5,20,5,10] //title的padding值
                },
                toolbox: {
                    show: true,
                    orient: 'horizontal',
                    right: 120,
                    top: 20,
                    feature: {
                        saveAsImage: {show: true}
                    }
                },
                xAxis: {
                    type: 'category',
                    // boundaryGap: false,
                    data: xAxisList
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                series: [{
                    data: yAxisList,
                    type: 'bar',
                    barWidth: 35,
                    smooth: true,
                    itemStyle: {
                        color: '#6395f9'
                    },
                    label: {
                        show: true,
                        position: 'outside'
                    },
                }]
            }
        }
    }
}
</script>

<style>

</style>