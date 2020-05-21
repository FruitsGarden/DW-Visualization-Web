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
                default-active="1-1"
                @select="changeTab" >
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-data-board"></i>数仓统计</template>
                    <el-menu-item
                        v-for="(item, index) in menuList"
                        :key="index" 
                        
                        :index="item.index"
                        ><i :class="item.class"></i>{{item.text}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container class="right-side">

            <div class="contain-header">
                <el-button @click="goDataV" style="position: absolute; right: 50px;top: 20px;" type="primary">切换大屏</el-button>
            </div>
            <div class="right-contains">
                <component v-bind:is="currentTabComponent"></component>
            </div>
        </el-container>
    </el-container>
</template>
<script>

import {homeService} from '../service/index.js'

import {
    activeTotalData,
    retainData,
    convertData,
    GMVData,
    areaData,
} from './home/index.js'
export default {
    components: {
        // lineComponent,
        activeTotalData,
        retainData,
        convertData,
        GMVData,
        areaData,
    },
    data(){
        return {
            lineData:{},
            menuList: [
                {class: 'el-icon-pie-chart', text: '活动统计', index: '1-1', component: 'activeTotalData'},
                {class: 'el-icon-document', text: '留存率统计', index: '1-2', component: 'retainData'},
                {class: 'el-icon-refresh', text: '转化率统计', index: '1-3', component: 'convertData'},
                {class: 'el-icon-s-data', text: 'GMV展示', index: '1-4', component: 'GMVData'},
                {class: 'el-icon-location-outline', text: '地区统计', index: '1-5', component: 'areaData'},
            ],
            currentTabComponent: 'activeTotalData',
        }
    },
    methods:{
        changeTab(index, indexPath){
            console.log(index, indexPath)
            this.currentTabComponent = this.menuList.find(item => item.index == index).component
        },
        goDataV(){
            this.$router.push('/datav')
        }
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
            display: block!important;
            .contain-header{
                position: relative;
                height: 64px;
                width: 100%;
                padding: 0;
                background: #fff;
                box-shadow: 0 1px 4px rgba(0,21,41,.08);
            }
            .right-contains{

            }
        }
        
    }
</style>




