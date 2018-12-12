import Vue from 'vue'
import App from './App.vue'
import router from './router'
import WizardContainer from './components/WizardContainer.vue'
import WizardButtonBar from './components/WizardButtonBar.vue'

Vue.config.productionTip = false

Vue.component('wizard-container', WizardContainer);
Vue.component('wizard-button-bar', WizardButtonBar);

new Vue({
  router,
  render: h => h(App),
  mounted: function() {
    document.getElementById('loader').style.display = 'none';
    this.$router.push('wizard-container');
  }
}).$mount('#main-container')
