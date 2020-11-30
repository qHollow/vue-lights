import './style/root.css';
import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import LightContainer from "./components/LightContainer.vue";


Vue.config.productionTip = false;
Vue.use(Router);
Vue.component("LightContainer", LightContainer);

const timers = {
  red: 10,
  yellow: 3,
  green: 15
};

const green = {
  template: '<LightContainer isColor="green"></LightContainer>'
};

const yellow = {
  template: '<LightContainer isColor="yellow"></LightContainer>'
};

const red = {
  template: '<LightContainer isColor="red"></LightContainer>'
};

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "red"
    },
    {
      path: "/green",
      component: green,
      name: "green"
    },
    {
      path: "/yellow",
      component: yellow,
      name: "yellow"
    },
    {
      path: "/red",
      component: red,
      name: "red"
    }
  ]
});

export { timers };

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
