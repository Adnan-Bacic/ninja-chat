import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'

import Chat from '@/components/Chat';

Vue.use(Router)

export default new Router({
  //mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,

      props: true,

      beforeEnter:(to, from, next) => {
        //see if name prop exists. doesnt go to chat page
        if(to.params.nameProp){
          //now goes to chat page
          next();
          //if it doesnt exist
        } else {
          //redirct to the welcome page
          next({ name: 'Welcome' })
        }
      }
    }
  ]
})
