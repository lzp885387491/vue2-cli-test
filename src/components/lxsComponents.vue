<template>
    <div>
        <lxs-fs-formwork1 v-if="lxsData.type == 1" :lxsData="lxsData"></lxs-fs-formwork1>
        <lxs-fs-formwork2 v-if="lxsData.type == 2" :lxsData="lxsData"></lxs-fs-formwork2>
        <lxs-fs-formwork3 v-if="lxsData.type == 3" :lxsData="lxsData"></lxs-fs-formwork3>
    </div>
</template>

<script>
import lxsFsFormwork1 from '@/components/lxsFsLsv/lxsFsFormwork1.vue';
import lxsFsFormwork2 from '@/components/lxsFsLsv/lxsFsFormwork2.vue';
import lxsFsFormwork3 from '@/components/lxsFsLsv/lxsFsFormwork3.vue';

export default {
    name: 'lxsComponents',
    props: ['lxsData'],
    components: {
        lxsFsFormwork1,
        lxsFsFormwork2,
        lxsFsFormwork3,
    },
}
</script>

<style scoped></style>