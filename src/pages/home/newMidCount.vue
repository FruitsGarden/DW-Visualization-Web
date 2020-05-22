<template>
    <div style="height: calc(100vh - 64px);widdth: 100%" v-loading="is_loading">
        <div style="margin-top: 100px;">   
            <new-mid-line-component
                :lineData="lineData"></new-mid-line-component>
        </div>
        
    </div>
</template>

<script>
import newMidLineComponent from './newMidCount/newMidLineComponent.vue'
import {homeService} from '@/service/index.js'
export default {
    components: {
        newMidLineComponent,
    },
    data(){
        return {
            is_loading: false,
            lineData: [],
            currentDate: '2020-05-05'
        }
    },
    methods :{
        async getNewMidCount(){
            try{
                this.is_loading = true
                await homeService.getNewMidCount(this.currentDate).then(data =>{
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
            
        },
    },
    async mounted(){
        await this.getNewMidCount()
    }
}
</script>

<style>

</style>