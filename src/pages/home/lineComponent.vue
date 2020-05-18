<template>
    <chart :options="lineOptions"></chart>
</template>

<script>
export default {
    props: {
        lineData: {
            type: Object,
            default(){
                return {}
            }
        },
    },
    computed: {
        lineOptions(){
            let xAxisList = [],
                yAxisList = [];
            Object.keys(this.lineData).forEach(element => {
                xAxisList.push(element)
                yAxisList.push(this.lineData[element])
            });
            return {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xAxisList
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: yAxisList,
                    type: 'line',
                    areaStyle: {}
                }]
            }
        }
    }
}
</script>

<style>

</style>