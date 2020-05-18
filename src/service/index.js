import {apiPathList} from '@/request/index.js'

import axios from 'axios' 
import {$utils} from '../utils/index.js'


export const homeService = {
    /**
     * 用户活跃统计接口
     * @param date 'YYY-MM-DD'
     */
    getActiveTotalData(date){
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
        // return axios.get(apiPathList.getActiveData+`?date=${date}&type=${type}`)
        if(type == 'dayCount'){
            return Promise.resolve([
                {activeCount: '', date: ''},
                {activeCount: '', date: ''},
                {activeCount: '', date: ''},
            ])
        }
        if(type == 'wkCount'){
            return Promise.resolve([
                {activeCount: '', date: '', is_weekend: 'N'},
                {activeCount: '', date: '', is_weekend: 'N'},
                {activeCount: '', date: '', is_weekend: 'N'},
            ])
        }
        if(type == 'monCount'){
            return Promise.resolve([
                {activeCount: '', date: '', is_monthend: 'N'},
                {activeCount: '', date: '', is_monthend: 'N'},
                {activeCount: '', date: '', is_monthend: 'N'},
            ])
        }
    },
    /**
     * 获取留存率数据
     * @param {String} startDate 
     * @param {String} endDate 
     */
    getRetainData(startDate, endDate){
        // return axios.get(apiPathList.getRetainData+`?startDate=${startDate}&endDate=${endDate}`)
        return Promise.resolve([
            {create_date: '', new_mid_count: '', d1: '', d2: '', d3: '', d4: '', d5: '', d6: ''},
        ])
    },
    /**
     * 获取转化率数据
     * @param {String} date 
     */
    getConvertData(date){
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
        // return axios.get(apiPathList.getGMVData+`?startDate=${startDate}&endDate=${endDate}`)
        return Promise.resolve([
            {gmv_amount: '210000', gmv_count: '', quarter: '2019-03-01'},
        ])
    },
    /**
     * 获取地区信息
     */
    getAreaData(){
        // return axios.get(apiPathList.getAreaData)
        return Promise.resolve([
            {name: '北京', remark: '', value: '50000'},
        ])
    }
}