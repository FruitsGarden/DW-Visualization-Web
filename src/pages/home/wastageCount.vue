<template>
    <div style="height: calc(100vh - 64px);widdth: 100%" v-loading="is_loading">
        <div style="margin-top: 100px;">
            <wastage-line-component
            :lineData="lineData"></wastage-line-component>
        </div>
        
    </div>
</template>

<script>
import wastageLineComponent from './wastageCount/wastageLineComponent.vue'
import {homeService} from '@/service/index.js'
export default {
    components: {
        wastageLineComponent,
    },
    data(){
        return {
            is_loading: false,
            lineData: [],
            currentDate: '2020-05-05'
        }
    },
    methods :{
        async getWastageCount(){
            try{
                this.is_loading = true
                await homeService.getWastageCount(this.currentDate).then(data =>{
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
        await this.getWastageCount()
    }
}
</script>

<style>

</style>