<template>
  <div class="home">
    <Slider v-model="value" range></Slider>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      value: [20, 50]
    }
  }
};
</script>

