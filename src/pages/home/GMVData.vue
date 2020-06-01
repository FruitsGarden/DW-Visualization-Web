<template>
    <div style="margin-top: 100px;min-height: 100vh; width: 1000px;margin: 0 auto;" v-loading="is_loading">
        <el-form :inline="true" style="max-width: 1000px;margin: 0 auto;padding: 20px 0;">
            <el-form-item label="时间范围">
                <el-date-picker
                    v-model="value1"
                    value-format="yyyy-MM-dd"
                    format="yyyy 年 MM 月 dd 日"
                    @change="changeDuration"
                    :picker-options="pickerOptions"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="searchData">查询</el-button>
            </el-form-item>
        </el-form>
        <gmv-component
            :lineData="lineData"></gmv-component>
    </div>
</template>

<script>
import gmvComponent from './GMVData/gmvComponent.vue'
import {homeService} from '@/service/index.js'
import {$utils} from '@/utils/index.js'
export default {
    components: {
        gmvComponent,
    },
    data(){
        return {
            is_loading: false,
            value1: '',
            startDate: '',
            endDate: '',
            lineData: [],
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
            },
        }
    },
    methods: {
        changeDuration(valaue){
            this.startDate = this.value1[0]
            this.endDate = this.value1[1]
        },
        async searchData(){
            await this.getData(this.startDate, this.endDate)
        },
        async getData(startDate, endDate){
            try{
                this.is_loading = true
                await homeService.getGMVData(startDate, endDate).then(data =>{
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
            
        }
    },
    async mounted(){
        let currentDate =  $utils.formatDate(new Date(), 'yyyy-MM-dd')
        console.log('初始化'+currentDate)
        await this.getData(currentDate, currentDate)
    }
}
</script>

<style>

</style>