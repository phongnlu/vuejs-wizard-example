import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WizardContainer from './components/WizardContainer.vue'
import PageIdToken from './components/PageIdToken.vue'

Vue.use(Router)

export default new Router({
  routes: [    
    {
      path: '/wizard-container',
      name: 'wizard-container',
      component: WizardContainer
    },
    {
      path: '/page-id-token',
      name: 'page-id-token',
      component: PageIdToken
    }
  ]
})
