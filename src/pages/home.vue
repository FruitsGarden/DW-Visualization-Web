<template>
    <el-container class="panel">
        <el-aside width="256px" class="left-side">
            <div class="panel-header">
                <div class="logo">
                    <div class="logo-in">
                        <img src="./home/images/chart-logo.svg" alt=""> 
                        <h1>电商可视化平台</h1> 
                    </div>
                    
                </div>
            </div>
            <el-menu 
                :default-openeds="['1', '3']"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                default-active="1-1">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-data-board"></i>数仓统计</template>
                    <el-menu-item index="1-1"><i class="el-icon-pie-chart"></i>活动统计</el-menu-item>
                    <el-menu-item index="1-2"><i class="el-icon-pie-chart"></i>留存率统计</el-menu-item>
                    <el-menu-item index="1-3"><i class="el-icon-pie-chart"></i>转化率统计</el-menu-item>
                    <el-menu-item index="1-4"><i class="el-icon-pie-chart"></i>GMV展示</el-menu-item>
                    <el-menu-item index="1-5"><i class="el-icon-pie-chart"></i>地区统计</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container class="right-side">
            
            <div class="contain-header"></div>
            <el-main>
                <!-- <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table> -->
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import lineComponent from './home/lineComponent.vue'
import {homeService} from '../service/index.js'
export default {
    components: {
        lineComponent,
    },
    data(){
        return {
            lineData:{},
        }
    },
    methods:{

    },
    async mounted(){
        // await homeService.getHomeLine().then(data =>{
        //     this.lineData = {
        //         ...data,
        //     }
        // })
    }
}
</script>

<style scoped lang="scss">
    .panel{
        min-height: 100vh;
        & /deep/ .el-menu{
            border-right: none;
        }
        .left-side{
            background: #545c64;
            .panel-header{
                display: flex;
                height: 64px;
                width: 100%;
                background: #545c64;
                .logo{
                    box-sizing: border-box;
                    width: 256px;
                    position: relative;
                    padding: 0 24px;
                    overflow: hidden;
                    background: #545c64;
                    cursor: pointer;
                    transition: all .3s;
                    .logo-in{
                        display: flex;
                        align-items: center;
                        height: 64px;
                        img{
                            display: inline-block;
                            height: 32px;
                            vertical-align: middle;
                        }
                        h1{
                            display: inline-block;
                            margin: 0 0 0 12px;
                            color: #fff;
                            font-weight: 600;
                            font-size: 20px;
                            vertical-align: middle;
                            animation: fade-in;
                            animation-duration: .3s;
                        }
                    }
                }
            }
        }
        .right-side{
            .contain-header{
                position: relative;
                display: flex;
                align-items: center;
                height: 64px;
                padding: 0;
                background: #fff;
                box-shadow: 0 1px 4px rgba(0,21,41,.08);
            }
        }
        
    }
</style>




