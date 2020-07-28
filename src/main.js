import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueGtag from "vue-gtag";
Vue.config.productionTip = false


// analytics
export function cookieConsent() {
  const getGDPR = localStorage.getItem('GDPR:accepted');
  if (typeof getGDPR !== 'undefined' && getGDPR === 'true') {
    Vue.use(VueGtag, {
      config: { id: "UA-173271413-1" },
      enabled: true
    }, router);
  } else if (typeof getGDPR !== 'undefined' && getGDPR === 'false') {
    Vue.use(VueGtag, {
      config: { id: "UA-173271413-1" },
      enabled: false
    }, router);
  }
}
cookieConsent();

//init
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
