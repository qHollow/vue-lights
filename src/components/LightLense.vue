<template>
  <div>
    <div
      class="circle"
      :class="{ red: isRed, yellow: isYellow, green: isGreen, active: active }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    active: Boolean
  },
  data: () => ({
    isRed: false,
    isYellow: false,
    isGreen: false
  }),
  created() {
    switch (this.color) {
      case "red":
        this.isRed = true;
        break;
      case "yellow":
        this.isYellow = true;
        break;
      case "green":
        this.isGreen = true;
        break;
    }
  }
};
</script>