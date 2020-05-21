<template>
    <div v-loading="is_loading" style="min-height: 100vh; width: 100%;">
        <div style="width: 1200px;margin: 0 auto;padding: 20px 0;">
            <el-date-picker
            v-model="value1"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"></el-date-picker>
            <el-button type="primary" @click="refreshData">刷新</el-button>
        </div>
        <convert-panel-group :convertData="activeTotalData"></convert-panel-group>
        <div class="funnel-box">
            <funnel-component :funnelData="activeTotalData"></funnel-component>
        </div>
        
    </div>
</template>

<script>
import convertPanelGroup from './convertData/convertPanelGroup.vue'
import {funnelComponent} from '@/pages/components/index.js'
import {homeService} from '@/service/index.js'
import {$utils} from '@/utils/index.js'
export default {
    components: {
        convertPanelGroup,
        funnelComponent,
    },
    data(){
        return {
            is_loading: false,
            value1: '',
            currentDate: '2020-05-04',
            activeTotalData:[]
        }
    },
    methods: {
        async refreshData(){
            this.currentDate = this.value1;
            console.log('刷新时间'+this.currentDate)
            await this.getData()
        },
        async getData(){
            try{
                this.is_loading = true
                await homeService.getConvertData(this.currentDate).then(data =>{
                    this.activeTotalData = data.data
                }).catch(error =>{
                     this.$message({
                        type: 'error',
                        message: error.message
                    })
                    this.is_loading = false
                }).finally(() =>{
                    this.is_loading = false
                })
            } catch(error){
                this.$message({
                    type: 'error',
                    message: error.message
                })
            }  
        }
    },
    async mounted(){
        // this.currentDate =  $utils.formatDate(new Date(), 'yyyy-MM-dd')
        console.log('初始化'+this.currentDate)
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