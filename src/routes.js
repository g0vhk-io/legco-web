import React from 'react';

const MemberList = React.lazy(() => import('./views/MemberList'));
const Member = React.lazy(() => import('./views/Member'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: '主頁', component: Dashboard },
  { path: '/members', exact: true, name: '選區議員名單', component: MemberList },
  { path: '/members/:id', name: '議員', component: Member },
];

export default routes;
