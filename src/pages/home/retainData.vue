<template>
    <div class="retainBox">
        <el-form :inline="true" style="padding: 20px 0;">
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
            :data="tableData"
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
            layout="prev, pager, next"
            :total="1000"></el-pagination>
    </div>
</template>

<script>
import {homeService} from '@/service/index.js'
import {$utils} from '@/utils/index.js'
export default {
    data(){
        return {
            value1: '',
            tableData: [],
            startDate: '',
            endDate: '',
        }
    },
    methods: {
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
            await homeService.getRetainData(startDate, endDate).then(data =>{
                this.tableData = data
            })  
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