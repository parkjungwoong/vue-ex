import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Alert from '../components/Alert'
import Btn from "../components/Btn";
import Logic from "../components/Logic";
import ComponentEx from "../components/ComponentEx";
import SampleAdminTable from "../components/SampleAdminTable"
import SampleAdminForm from "../components/SampleAdminForm";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/btn',
      name: 'Btn',
      component: Btn
    },
    {
      path: '/logic',
      name: Logic,
      component: Logic
    },
    {
      path: '/componentEx',
      name: ComponentEx,
      component: ComponentEx
    },
    {
      path: '/AdminEx',
      name:SampleAdminTable,
      component:SampleAdminTable
    },
    {
      path: '/AdminForm',
      name:SampleAdminForm,
      component:SampleAdminForm
    }
  ]
})
