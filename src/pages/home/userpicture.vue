<template>
    <div style="min-height: 100vh;width: 1000px;margin: 0 auto;padding: 20px 0;" v-loading="is_loading">
         <el-row :gutter="12">
            <el-col 
                :span="6" 
                v-for="(item, index) in currentTableData"
                :key="index">
                <el-card shadow="always" class="card" style="">
                    <!-- <div style="height: 35px;width: 100%;background: #409Eff;line-height: 35px;color: #fff;text-align: center;border-radius: 4px;">静态属性</div> -->
                    <el-divider content-position="left">静态属性</el-divider>
                    <div class="form">
                        <p class="title">用户id：</p>
                        <p class="value">{{item.user_id}}</p>
                    </div>
                     <div class="form">
                        <p class="title">性别：</p>
                        <p class="value">{{item.gender}}</p>
                    </div>
                    <div class="form">
                        <p class="title">年龄：</p>
                        <p class="value">{{item.age}}岁</p>
                    </div>
                    <!-- <div style="height: 35px;width: 100%;background: #409Eff;line-height: 35px;color: #fff;text-align: center;border-radius: 4px;margin: 10px 0;">消费属性</div> -->
                    <el-divider content-position="left">消费属性</el-divider>
                    <div class="tag">
                        <el-tag size="small" style="margin-bottom: 6px;">{{item.top1}}</el-tag>
                        <el-tag size="small" style="margin-bottom: 6px;">{{item.top2}}</el-tag>
                        <el-tag size="small" style="margin-bottom: 6px;">{{item.top3}}</el-tag>
                    </div>
                    
                    
                    
                    
                    <!-- <el-button class="btn" type="primary" size="mini" @click="openDialog(item)">详情</el-button> -->
                </el-card>
            </el-col> 
        </el-row>
        <el-dialog
            title="用户详情"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <el-card shadow="always" class="card" style="">
                <div class="form">
                    <p class="title">用户id：</p>
                    <p class="value">{{dialogForm.user_id}}</p>
                </div>
                    <div class="form">
                    <p class="title">性别：</p>
                    <p class="value">{{dialogForm.gender}}</p>
                </div>
                <div class="form">
                    <p class="title">年龄：</p>
                    <p class="value">{{dialogForm.age}}</p>
                </div>
                
                <div class="tag">
                    <el-tag >{{dialogForm.top1}}</el-tag>
                    <el-tag >{{dialogForm.top2}}</el-tag>
                    <el-tag >{{dialogForm.top3}}</el-tag>
                </div>
            </el-card>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-pagination
            background
            @current-change="handleCurrentPage"
            @prev-click="prevAndNextClick"
            @next-click="prevAndNextClick"
            :page-size="40"
            layout="prev, pager, next"
            :total="totalPage"></el-pagination>
    </div>
   
</template>

<script>
import {homeService} from '@/service/index.js'
export default {
    data(){
        return {
            is_loading: false,
            dialogVisible: false,
            pictureData: [],
            totalPage: 0,
            currentTableData: [],
            dialogForm: {}
        }
    },
    methods: {
        /**
         * 前进后退
         */
        prevAndNextClick(val){
            console.log(val)
            let start = (val -1 ) * 40 ,
                end = val * 40
            this.currentTableData = this.pictureData.slice(start, end)
        },
        /**
         * 切换页码
         */
        async handleCurrentPage(val){
            console.log(val)
            let start = (val -1 ) * 40 ,
                end = val * 40
            this.currentTableData = this.pictureData.slice(start, end)
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        openDialog(item){
            this.dialogForm = this.pictureData.find(it => item.user_id == it.user_id)
            this.dialogVisible = true
        }
    },
    async mounted(){
        
        try{
            this.is_loading = true
            await homeService.queryUserTop3Category().then(data =>{
                console.log(data)
                
                let pictureList = data.data.reduce((arr, item, index) =>{
                    if( item.top1 != '\\N' && item.top2 != '\\N' && item.top3 != '\\N'){
                        return [
                            ...arr,
                            item
                        ]
                    } else {
                        return arr
                    }

                },[])

                this.pictureData = pictureList
                this.totalPage = this.pictureData.length
                this.currentTableData = this.pictureData.slice(0, 40)
                this.is_loading = false
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
            this.is_loading = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .card{
        height: 340px;
        margin-bottom: 15px;
        position: relative;
        .btn{
            position: absolute;
            right: 10px;
            bottom: 5px;
        }
    }
    .form {
        height: 35px;
        line-height: 35px;
        width: 100%;
        display: flex;
        .title{
            height: 35px;
            width: 100px;
        }
        .value{
            flex: 1;
        }
    }
    .tag{
        padding: 20px 0px;
    }
</style>