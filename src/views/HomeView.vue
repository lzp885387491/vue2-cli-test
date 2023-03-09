<template>
  <div>
    <div id="component"></div>
  </div>
</template>

<script>
import Component from '@/components/test/container.js';
export default {
  data() {
    return {

    }
  },
  mounted() {
    new Component({
      id: 'component',
      type: '1',
      data: {},
    });
  }
}
</script>

<style lang="scss" scoped></style>