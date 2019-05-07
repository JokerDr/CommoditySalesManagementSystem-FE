export default {
  path: '/user',
  component: '../layouts/UserLayout/UserLayout',
  routes: [
    {
      path: '/user',
      redirect: '/user/login',
    },
    {
      path: '/user/login',
      name: 'login',
      component: './User/Login/Login',
    },
    {
      path: '/user/register',
      name: 'register',
      component: './User/Register/Register',
    },
    {
      path: './user/forgot-password',
      name: 'forgotPassword',
      component: './User/ForgotPassword/ForgotPassword',
    },
    {
      path: './user/read-me',
      name: 'readMe',
      component: './User/ReadMe/ReadMe',
    },
    {
      path: '/user/register-result',
      name: 'register.result',
      component: './User/RegisterResult/RegisterResult',
    },
    {
      component: '404',
    },
  ],
};
