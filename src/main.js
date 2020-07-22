import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueAnalytics from 'vue-analytics';
Vue.config.productionTip = false


// analytics
export function cookieConsent() {
  console.log('wohoo')
  const getGDPR = localStorage.getItem('GDPR:accepted');
  if (typeof getGDPR !== 'undefined' && getGDPR === 'true') {
    Vue.use(VueAnalytics, {
      id: 'UA-173271413-1',
      disabled: false,
      debug: {
        enabled: true,
        trace: true,
        sendHitTask: true
      }
    })
  } else if (typeof getGDPR !== 'undefined' && getGDPR === 'false') {
    Vue.use(VueAnalytics, {
      id: 'UA-173271413-1',
      disabled: true,
      debug: {
        enabled: true,
        trace: true,
        sendHitTask: true
      }
    })
  }
}
cookieConsent();

//init
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
