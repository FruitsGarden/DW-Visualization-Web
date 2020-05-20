<template>
    <div>

        <panel-group 
            @handleSetLineChartData="changeActiveData"
            :activeLineData="activeLineData"
            :activeTotalData="activeTotalData"></panel-group>
        <div class="line-box">
            <div class="line-box-in">
                <line-component :lineData="activeLineData"></line-component>
            </div>
        </div>
        
    </div>
</template>

<script>
import panelGroup from './activeTotalData/panelGroup.vue'
import {lineComponent} from '@/pages/components/index.js'
import {homeService} from '@/service/index.js'
export default {
    components: {
        panelGroup,
        lineComponent,
    },
    data(){
        return {
            activeTotalData: {
                wkCount: {totalData: 0},
                monCount: {totalData: 0},
                dayCount: {totalData: 0},
            },
            dailType: {
                dayCount: '日活',
                wkCount: '周活',
                monCount: '月活',
            },
            activeLineData: {}
        }
    },
    methods: {
        async changeActiveData(type){
            let typename = this.dailType[type]
            await homeService.getActiveData(0, type).then(data =>{
                this.activeLineData = {
                    data: data,
                    key: type,
                    name: typename,
                }
            })
        }
    },
    async mounted(){
        await homeService.getActiveTotalData().then(data =>{
            this.activeTotalData = data.reduce((obj, item, index) =>{
                return {
                    ...obj,
                    [item.id]: item,
                }
            },{}) 
        })
        await this.changeActiveData('dayCount')
    }
}
</script>

<style lang="scss" scoped>
    .line-box{
        width: 100%;
        .line-box-in {
            max-width: 1200px; 
            margin: 0 auto;
        }
    }   
</style>