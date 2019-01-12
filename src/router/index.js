import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Register from '@/components/Register';
import UserPage from '@/components/UserPage';
import JobPage from '@/components/JobPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user/:id',
      name: 'User',
      component: UserPage
    },
    {
      path: '/job/:title',
      name: 'Job',
      component: JobPage
    }
  ]
});
