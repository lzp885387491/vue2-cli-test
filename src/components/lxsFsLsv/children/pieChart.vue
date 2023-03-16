<template>
    <div>
        <div id="main"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    props: ['option'],
    mounted() {
        this.init()
    },
    methods: {
        init() {
            let chartDom = document.getElementById('main');
            let myChart = echarts.init(chartDom);
            let option = this.option;

            option && myChart.setOption(option);
        }
    }
}
</script>

<style scoped>
#main {
    width: 100%;
    height: 100%;
}
</style>