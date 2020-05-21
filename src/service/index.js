import {apiPathList} from '@/request/index.js'

import axios from 'axios' 
import {$utils} from '../utils/index.js'


export const homeService = {
    /**
     * 用户活跃统计接口
     * @param date 'YYY-MM-DD'
     */
    getActiveTotalData(date){
        console.log('请求参数',date)
        // return axios.get(apiPathList.getActiveTotalData+`?date=${date}`)
        return Promise.resolve([
            {id: 'dayCount', title: '日活', totalData: 10},
            {id: 'wkCount', title: '周活', is_weekend: 'N', totalData: 34},
            {id: 'monCount', title: '月活', is_monthend: 'N', totalData: 453},
        ])
    },
    /**
     * 获取活跃折线
     * @param date 'YYY-MM-DD'
     * @param type dayCount wkCount monCount 
     */
    getActiveData(date, type){
        console.log('请求参数',date, type)
        // return axios.get(apiPathList.getActiveData+`?date=${date}&type=${type}`)
        if(type == 'dayCount'){
            return Promise.resolve([
                {activeCount: 300, date: '2019-01-01'},
                {activeCount: 400, date: '2019-01-02'},
                {activeCount: 500, date: '2019-01-03'},
                // {activeCount: 230, date: '2019-01-03'},
                // {activeCount: 370, date: '2019-01-03'},
                // {activeCount: 900, date: '2019-01-03'},
                // {activeCount: 20, date: '2019-01-03'},
            ])
        }
        if(type == 'wkCount'){
            return Promise.resolve([
                {activeCount: 600, date: '32', is_weekend: 'N'},
                {activeCount: 700, date: '33', is_weekend: 'N'},
                {activeCount: 800, date: '34', is_weekend: 'N'},
            ])
        }
        if(type == 'monCount'){
            return Promise.resolve([
                {activeCount: 900, date: '1', is_monthend: 'N'},
                {activeCount: 1000, date: '2', is_monthend: 'N'},
                {activeCount: 1200, date: '3', is_monthend: 'N'},
            ])
        }
    },
    /**
     * 获取留存率数据
     * @param {String} startDate 
     * @param {String} endDate 
     */
    getRetainData(startDate, endDate){
        console.log('请求参数',startDate,endDate)
        // return axios.get(apiPathList.getRetainData+`?startDate=${startDate}&endDate=${endDate}`)
        return Promise.resolve([
            {create_date: '2019-01-01', new_mid_count: '65', d1: '1', d2: '2', d3: '3', d4: '4', d5: '5', d6: '6'},
            {create_date: '2019-01-02', new_mid_count: '65', d1: '1', d2: '2', d3: '3', d4: '4', d5: '5', d6: '6'},
            {create_date: '2019-01-03', new_mid_count: '65', d1: '1', d2: '2', d3: '3', d4: '4', d5: '5', d6: '6'},
            {create_date: '2019-01-04', new_mid_count: '65', d1: '1', d2: '2', d3: '3', d4: '4', d5: '5', d6: '6'},
            {create_date: '2019-01-05', new_mid_count: '65', d1: '1', d2: '2', d3: '3', d4: '4', d5: '5', d6: '6'},
            {create_date: '2019-01-06', new_mid_count: '65', d1: '1', d2: '2', d3: '3', d4: '4', d5: '5', d6: '6'},
            {create_date: '2019-01-07', new_mid_count: '65', d1: '1', d2: '2', d3: '3', d4: '4', d5: '5', d6: '6'},
            {create_date: '2019-01-08', new_mid_count: '65', d1: '1', d2: '2', d3: '3', d4: '4', d5: '5', d6: '6'},

        ])
    },
    /**
     * 获取转化率数据
     * @param {String} date 
     */
    getConvertData(date){
        console.log('请求参数',date)
        // return axios.get(apiPathList.getConvertData+`?date=${date}`)
        return Promise.resolve([
            {name: '浏览', value: '100'},
            {name: '订单', value: '25.0'},
            {name: '支付', value: '15.0'},
        ])
    },
    /**
     * 获取GMV
     * @param {String} startDate 
     * @param {String} endDate 
     */
    getGMVData(startDate, endDate){
        console.log('请求参数',startDate, endDate)
        // return axios.get(apiPathList.getGMVData+`?startDate=${startDate}&endDate=${endDate}`)
        return Promise.resolve([
            {gmv_amount: '210000', gmv_count: '1000', quarter: '2019-03-01'},
            {gmv_amount: '110000', gmv_count: '4000', quarter: '2019-03-01'},
            {gmv_amount: '210000', gmv_count: '1000', quarter: '2019-03-01'},
            {gmv_amount: '110000', gmv_count: '4000', quarter: '2019-03-01'},
            {gmv_amount: '210000', gmv_count: '1000', quarter: '2019-03-01'},
            {gmv_amount: '110000', gmv_count: '4000', quarter: '2019-03-01'},
            {gmv_amount: '210000', gmv_count: '1000', quarter: '2019-03-01'},
        ])
    },
    /**
     * 获取地区信息
     */
    getAreaData(){
        // return axios.get(apiPathList.getAreaData)
        return Promise.resolve([
            {name: '北京', remark: '', value: 50000},
            {name: '上海', remark: '', value: 50000},
            {name: '黑龙江', remark: '', value: 50000},
            {name: '深圳', remark: '', value: 50000},
            {name: '湖北', remark: '', value: 50000},
        ])
    }
}