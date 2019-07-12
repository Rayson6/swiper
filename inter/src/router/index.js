import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home';
import First from '../views/first';
import Myself from '../views/myself';

Vue.use(Router)

export default new Router({
    routes: [{
      path:'/',
      redirect:{name:'Home'}
    },{
      path: '/home',
      name: 'Home',
      component: Home,
      children:[{
        path:'first',
        name:"First",
        component:First
      },{
        path:'myself',
        name:'Myself',
        component:Myself
      }]
    }]
})
