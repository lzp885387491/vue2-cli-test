<template>
  <div class="home">
    <lxs-components :lxsData="lxsData"></lxs-components>
  </div>
</template>

<script>
import lxsComponents from '@/components/lxsComponents.vue';
export default {
  name: 'home',
  data() {
    return {
      lxsData: {
        type: 1,
        data: [],
      }
    };
  },
  components: {
    lxsComponents
  }
}
</script>

<style scoped></style>