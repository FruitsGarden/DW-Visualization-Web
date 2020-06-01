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
                yAxisList = [],
                y1AxisList = [],
                y2AxisList = [],
                y3AxisList = [];
            this.lineData.forEach((element, index) => {
                xAxisList.push(element.create_date)
                yAxisList.push(element.new_mid_count)
                y1AxisList.push(element.d1)
                y2AxisList.push(element.d2)
                y3AxisList.push(element.d3)
            })

            return {
                title: { 
                    show: true, //显示折线图
                    text: `用户留存率`, //标题文字
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
                    name: '日期',
                    data: xAxisList,
                    axisLabel: {
                        rotate: -45
                    }
                },
                yAxis: {
                    name: '人',
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    
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
                        position: 'inside'
                    },
                }, {
                    data: y1AxisList,
                    type: 'line',
                    itemStyle: {
                        color: '#ccc'
                    },
                    label: {
                        show: true,
                        position: 'outside'
                    },
                },{
                    data: y2AxisList,
                    type: 'line',
                    itemStyle: {
                        color: '#35bfa3'
                    },
                    label: {
                        show: true,
                        position: 'outside'
                    },
                },{
                    data: y3AxisList,
                    type: 'line',
                    itemStyle: {
                        color: '#f56b6b'
                    },
                    label: {
                        show: true,
                        position: 'outside'
                    },
                },]
            }
        }
    }
}
</script>

<style>

</style>