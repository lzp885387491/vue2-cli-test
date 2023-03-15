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
    props: ['lxsData'],
    components: {
        lxsFsWebcam,
        lxsFsFormwork
    },
    created() {
        console.log('当前页面为第', this.lxsData.type, '个');
    },
}
</script>

<style scoped>

</style>