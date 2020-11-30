<template>
  <main class="wrapper">
    <div class="light">
      <LightLense color="red" v-bind:active="isRedNow" />
      <LightLense color="yellow" v-bind:active="isYellowNow" />
      <LightLense color="green" v-bind:active="isGreenNow" />
    </div>
  </main>
</template>

<script>
import LightLense from "./LightLense.vue";
export default {
  props: {
    isColor: String
  },
  components: {
    LightLense
  },
  data: () => ({
    isGreenNow: false,
    isYellowNow: false,
    isRedNow: false
  }),
  created() {
    switch (this.isColor) {
      case "green":
        this.isGreenNow = true;
        break;
      case "yellow":
        this.isYellowNow = true;
        break;
      case "red":
        this.isRedNow = true;
        break;
    }
  }
};
</script>
