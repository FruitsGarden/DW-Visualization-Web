import {apiPathList} from '@/request/index.js'

import axios from 'axios' 
import {$utils} from '../utils/index.js'




export const homeService = {
    /**
     * 获取
     */
    getHomeLine(){
        return Promise.resolve({
            Mon: 820,
            Tue: 932,
            Wed: 901,
            Thu: 934,
            Fri: 1290,
            Sat: 1330,
            Sun1: 1320,
        })
    }
}
  