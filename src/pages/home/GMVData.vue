<template>
    <div style="margin-top: 100px;">
        <gmv-component
            :lineData="lineData"></gmv-component>
    </div>
</template>

<script>
import gmvComponent from './GMVData/gmvComponent.vue'
import {homeService} from '@/service/index.js'
export default {
    components: {
        gmvComponent,
    },
    data(){
        return {
            lineData: [],
        }
    },
    methods: {
        async getData(){
            await homeService.getGMVData().then(data =>{
                this.lineData = data
            })
        }
    },
    async mounted(){
        await this.getData()
    }
}
</script>

<style>

</style>