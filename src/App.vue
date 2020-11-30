<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { timers } from "./main.js";
export default {
  name: "App",
  props: {
    timers: Number
  },
  data: () => ({
    nextPath: "",
    prevPath: "/",
    timeLeft: 0
  }),
  mounted() {
    this.$router.afterEach(() => {
      this.getNextPage(this.$route.path);
      this.initTimer();
    });
    this.getNextPage(this.$route.path);
    this.initTimer();
  },
  methods: {
    getNextPage(path) {
      switch (path) {
        case "/red":
          this.nextPath = "yellow";
          this.prevPath = "";
          this.timeLeft = timers.red;
          break;
        case "/yellow":
          if (this.prevPath === "green") {
            this.nextPath = "red";
            this.timeLeft = timers.yellow;
            break;
          }
          this.timeLeft = timers.yellow;
          this.nextPath = "green";
          break;
        case "/green":
          this.nextPath = "yellow";
          this.prevPath = "green";
          this.timeLeft = timers.green;
          break;
      }
    },
    initTimer() {
      if (this.timeLeft) {
        setTimeout(() => {
          this.timeLeft--;
          this.initTimer();
        }, 1000);
      } else {
        this.$router.push(this.nextPath);
      }
    }
  }
};
</script>
