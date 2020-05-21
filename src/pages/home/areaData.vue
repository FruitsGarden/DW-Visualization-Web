<template>
    <div style="height: calc(100vh - 65px);width: 100%;" v-loading="is_loading">
        <area-component :areaData="mapData"></area-component>
    </div>
</template>

<script>
import areaComponent from './areaData/areaComponent.vue'
import {homeService} from '@/service/index.js'
export default {
    components: {
        areaComponent,
    },
    data(){
        return {
            is_loading: false,
            mapData: []
        }
    },
    methods: {
        async getData(){
            try{
                this.is_loading = true
                await homeService.getAreaData().then(data =>{
                    this.mapData = data.data
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
            
        }
    },
    async mounted(){
        this.getData()
    }
}
</script>

<style>

</style>