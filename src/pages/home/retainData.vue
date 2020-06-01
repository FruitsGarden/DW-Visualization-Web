<template>
    <div class="retainBox" style="min-height: calc(100vh - 64px); width: 1000px;margin: 0 auto;" v-loading="is_loading">
        <el-form :inline="true" style="padding: 20px 100px">
            <el-form-item label="时间范围">
                <el-date-picker
                    v-model="value1"
                    value-format="yyyy-MM-dd"
                    format="yyyy 年 MM 月 dd 日"
                    @change="changeDuration"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="searchData">查询</el-button>
            </el-form-item>
        </el-form>
        
        <el-table
            :data="currentTableData"
            style="width: 100%"
            :row-class-name="tableRowClassName">
            <el-table-column prop="create_date" label="时间" width="180" align="center"></el-table-column>
            <el-table-column prop="new_mid_count" label="新增用户" width="180" align="center"></el-table-column>
            <el-table-column prop="d1" label="一天后" align="center"></el-table-column>
            <el-table-column prop="d2" label="两天后" align="center"></el-table-column>
            <el-table-column prop="d3" label="三天后" align="center"></el-table-column>
            <el-table-column prop="d4" label="四天后" align="center"></el-table-column>
            <el-table-column prop="d5" label="五天后" align="center"></el-table-column>
            <el-table-column prop="d6" label="六天后" align="center"></el-table-column>
        </el-table>
        <el-pagination
            background
            @current-change="handleCurrentPage"
            @prev-click="prevAndNextClick"
            @next-click="prevAndNextClick"
            :page-size="10"
            layout="prev, pager, next"
            :total="totalPage"></el-pagination>
    </div>
</template>

<script>
import {homeService} from '@/service/index.js'
import {$utils} from '@/utils/index.js'
export default {
    data(){
        return {
            is_loading: false,
            value1: '',
            totalPage: 0,
            currentTableData: [],
            tableData: [],
            startDate: '',
            endDate: '',
        }
    },
    methods: {
        /**
         * 前进后退
         */
        prevAndNextClick(val){
            console.log(val)
            let start = (val -1 ) * 10 ,
                end = val * 10
            this.currentTableData = this.tableData.slice(start, end)
        },
        /**
         * 切换页码
         */
        async handleCurrentPage(val){
            console.log(val)
            let start = (val -1 ) * 10 ,
                end = val * 10
            this.currentTableData = this.tableData.slice(start, end)
        },
        tableRowClassName({row, rowIndex}) {
            if (rowIndex %2  == 1) {
                return 'success-row';
            } 
            return '';
        },
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
                await homeService.getRetainData(startDate, endDate).then(data =>{
                    this.tableData = data.data
                    this.totalPage = this.tableData.length
                    this.currentTableData = this.tableData.slice(0, 10)
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

<style lang="scss" scoped>
    .retainBox{
        width: 1200px;
        margin: 0 auto;
    }
    .el-table /deep/ .warning-row {
        background: oldlace;
    }

    .el-table /deep/ .success-row {
        background: #f0f9eb;
    }
</style>