<template>
    <div>
        <div style="width: 1200px;margin: 0 auto;padding: 20px 0;">
            <el-date-picker
            v-model="value1"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"></el-date-picker>
            <el-button type="primary" @click="refreshData">刷新</el-button>
        </div>
        
        <panel-group 
            @handleSetLineChartData="changeActiveData"
            :activeLineData="activeLineData"
            :activeTotalData="activeTotalData"></panel-group>
        <div class="line-box">
            <div class="line-box-in">
                <line-component :lineData="activeLineData"></line-component>
            </div>
        </div>
        
    </div>
</template>

<script>
import panelGroup from './activeTotalData/panelGroup.vue'
import {lineComponent} from '@/pages/components/index.js'
import {homeService} from '@/service/index.js'
import {$utils} from '@/utils/index.js'
export default {
    components: {
        panelGroup,
        lineComponent,
    },
    data(){
        return {
            value1: '',
            currentDate: '',
            activeTotalData: {
                wkCount: {totalData: 0},
                monCount: {totalData: 0},
                dayCount: {totalData: 0},
            },
            dailType: {
                dayCount: '日活',
                wkCount: '周活',
                monCount: '月活',
            },
            activeLineData: {}
        }
    },
    methods: {
        async changeActiveData(type){
            let typename = this.dailType[type]
            await homeService.getActiveData(this.currentDate, type).then(data =>{
                this.activeLineData = {
                    data: data,
                    key: type,
                    name: typename,
                }
            })
        },
        async getActiveTotalData(){
            await homeService.getActiveTotalData(this.currentDate).then(data =>{
                this.activeTotalData = data.reduce((obj, item, index) =>{
                    return {
                        ...obj,
                        [item.id]: item,
                    }
                },{}) 
            })
        },
        async refreshData(){
            this.currentDate = this.value1;
            console.log('刷新时间'+this.currentDate)
            await this.getActiveTotalData()
            await this.changeActiveData('dayCount')
        }
    },
    async mounted(){
        this.currentDate =  $utils.formatDate(new Date(), 'yyyy-MM-dd')
        console.log('初始化'+this.currentDate)
        await this.getActiveTotalData()
        await this.changeActiveData('dayCount')
    }
}
</script>

<style lang="scss" scoped>
    .line-box{
        width: 100%;
        .line-box-in {
            max-width: 1200px; 
            margin: 0 auto;
        }
    }   
</style>