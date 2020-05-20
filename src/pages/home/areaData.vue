<template>
    <div style="height: calc(100vh - 65px);width: 100%;">
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
            mapData: []
        }
    },
    methods: {
        async getData(){
            await homeService.getAreaData().then(data =>{
                this.mapData = data
            })
        }
    },
    async mounted(){
        this.getData()
    }
}
</script>

<style>

</style>