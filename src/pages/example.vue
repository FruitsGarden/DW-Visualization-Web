<template>
    <div>
        <input type="text" v-model="test1">
    </div>
</template>

<script>
export default {
    data(){
        return {
            test1: ''
        }
    },
    props: {
        test2:{type: String, default: ''}
    },
    methods: {
        getTest1(){return this.test1}
    },
    computed: {
        test3(){return this.test1 + '1111'}
    },
    watch: {
        test1(val, oldVal){}
    },
    created(){
        //声明周期钩子函数，
    },
    mounted(){
        //声明周期钩子函数
    },
}
</script>

<style scoped lang="scss">

</style>