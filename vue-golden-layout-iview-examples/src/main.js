import $ from 'jquery';
import _ from 'lodash';

import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-light-theme.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import iView from 'iView';
import 'iview/dist/styles/iview.css';

import Component01 from '@/components/Component01';
import MyForm from '@/components/MyForm';

window.$ = $;
window._ = _;

Vue.use(iView);

Vue.component('component01', Component01);
Vue.component('myform', MyForm);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
