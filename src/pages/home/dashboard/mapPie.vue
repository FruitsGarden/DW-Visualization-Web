<template>
    <chart :options="pieChartData" ref="runTimes_creditChart" :style="{width: '50%'}"></chart>
</template>

<script>
export default {
    props: {
        mapData: {
            type: Array,
            default(){
                return []
            }
        }
    },
    computed: {
        pieChartData(){
            return {
                title: { 
                    show: true, //显示折线图
                    text: `销量排名前四省份`, //标题文字
                    left: 'center', //配置title的位置
                    padding: [5,20,5,10] //title的padding值
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: this.mapData
                    }
                ]
            }
        }
    }
}
</script>

<style>

</style>