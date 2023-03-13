<template>
    <div>
        <lxs-fs-webcam v-if="lxsData.type == 1" :lxsData="lxsData"></lxs-fs-webcam>
        <lxs-fs-formwork v-if="lxsData.type == 2" :lxsData="lxsData"></lxs-fs-formwork>
    </div>
</template>

<script>
import lxsFsWebcam from '@/components/lxsFsLsv/lxsFsWebcam.vue';
import lxsFsFormwork from '@/components/lxsFsLsv/lxsFsFormwork.vue';

export default {
    name: 'lxsComponents',
    props: ['lxsData', 'isLog'],
    components: {
        lxsFsWebcam,
        lxsFsFormwork
    },
    created() {
        console.log('当前页面为第', this.lxsData.type, '个');
        if (!this.isLog) {
            this.log();
        }
    },
    methods: {
        log() {
            let title = `lxs 组件简介:`
            let msg = `    1、本组件接收一个 lxsData 参数,该参数为一个object格式;
    2、lxsData下要传一个type字段,一个data字段;
    3、type 字段值为：1 ~ 10(数字)；
    4、data 字段值为：页面内的数据,初始数据仅供参考！
    注：参数详情请查看：src/assets/lxsFsLsv/LXS-README.md文件！
        若需要关闭此日志：请在组件标签内添加自定义属性 isLog = false 即可！`
            console.log('%c' + title, 'color: red;font-size: 20px;line-height: 36px;');
            console.log('%c' + msg, 'color: #4681d6;');
        }
    }
}
</script>

<style scoped>

</style>