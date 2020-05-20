<template>
    <div>
        <convert-panel-group 
            @handleSetLineChartData="changeConvertData"
            :convertData="activeTotalData"></convert-panel-group>
        <div class="funnel-box">
            <funnel-component :funnelData="activeTotalData"></funnel-component>
        </div>
        
    </div>
</template>

<script>
import convertPanelGroup from './convertData/convertPanelGroup.vue'
import {funnelComponent} from '@/pages/components/index.js'
import {homeService} from '@/service/index.js'
export default {
    components: {
        convertPanelGroup,
        funnelComponent,
    },
    data(){
        return {
            activeTotalData:[]
        }
    },
    methods: {
        changeConvertData(){

        },
        async getData(){
            await homeService.getConvertData().then(data =>{
                this.activeTotalData = data
            })
        }
    },
    async mounted(){
        await this.getData()
    }

}
</script>

<style>
    .funnel-box{
        width: 1000px;
        margin: 0 auto;
    }
</style>