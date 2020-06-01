<template>
    <chart :options="funnelOptions" ref="runTimes_creditChart" :style="{width: '50%'}"></chart>
</template>

<script>
export default {
    props: {
        funnelData: {
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
        funnelOptions(){

            return {
                title: {
                    text: '订单转化漏斗图',
                    left: 'center', //配置title的位置
                    padding: [5,20,5,10] //title的padding值
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}%"
                },
                // toolbox: {
                //     feature: {
                //         dataView: {readOnly: false},
                //         restore: {},
                //         saveAsImage: {}
                //     }
                // },
                legend: {
                    // data: ['展现','点击','访问','咨询','订单']
                    orient: 'vertical',
                    left: 10,
                },

                series: [
                    {
                        name:'订单转化漏斗图',
                        type:'funnel',
                        left: '20%',
                        top: 60,
                        //x2: 80,
                        bottom: 60,
                        width: '80%',
                        // height: {totalHeight} - y - y2,
                        min: 0,
                        max: 100,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending',
                        gap: 2,
                        label: {
                            show: true,
                            position: 'inside'
                        },
                        labelLine: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        },
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 1
                        },
                        emphasis: {
                            label: {
                                fontSize: 20
                            }
                        },
                        data: this.funnelData
                    }
                ]
            }
        }
    }
}
</script>

<style>

</style>