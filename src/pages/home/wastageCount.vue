<template>
    <div style="height: calc(100vh - 64px);width: 1000px;margin: 0 auto;" v-loading="is_loading">
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
            <wastage-line-component
            :lineData="lineData"></wastage-line-component>
        </div>
        
    </div>
</template>

<script>
import wastageLineComponent from './wastageCount/wastageLineComponent.vue'
import {homeService} from '@/service/index.js'
export default {
    components: {
        wastageLineComponent,
    },
    data(){
        return {
            value1: '',
            is_loading: false,
            lineData: [],
            currentDate: '2020-05-05'
        }
    },
    methods :{
        async refreshData(){
            this.currentDate = this.value1;
            await this.getWastageCount()
        },
        async getWastageCount(){
            try{
                this.is_loading = true
                await homeService.getWastageCount(this.currentDate).then(data =>{
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
        await this.getWastageCount()
    }
}
</script>

<style>

</style>