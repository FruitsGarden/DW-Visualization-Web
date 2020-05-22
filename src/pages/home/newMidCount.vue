<template>
    <div style="height: calc(100vh - 64px);widdth: 100%" v-loading="is_loading">
        <div style="margin-top: 100px;">   
            <div style="max-width: 1000px;margin: 0 auto;padding: 20px 0;">
                <el-date-picker
                v-model="value1"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"></el-date-picker>
                <el-button type="primary" @click="refreshData">刷新</el-button>
            </div>
            <new-mid-line-component
                :lineData="lineData"></new-mid-line-component>
        </div>
    </div>
</template>

<script>
import newMidLineComponent from './newMidCount/newMidLineComponent.vue'
import {homeService} from '@/service/index.js'
export default {
    components: {
        newMidLineComponent,
    },
    data(){
        return {
            is_loading: false,
            value1: '',
            lineData: [],
            currentDate: '2020-05-05'
        }
    },
    methods :{
        async refreshData(){
            this.currentDate = this.value1;
            console.log('刷新时间'+this.currentDate)
            await this.getNewMidCount()
        },
        async getNewMidCount(){
            try{
                this.is_loading = true
                await homeService.getNewMidCount(this.currentDate).then(data =>{
                    this.lineData = data.data
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
            
        },
    },
    async mounted(){
        await this.getNewMidCount()
    }
}
</script>

<style>

</style>