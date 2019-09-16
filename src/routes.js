import React from 'react';

const Result = React.lazy(() => import('./views/Result'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: '主頁', component: Dashboard },
  { path: '/result', name: '選區議員名單', component: Result },
];

export default routes;
