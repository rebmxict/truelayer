import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import DashboardLayout from './layouts/Dashboard';

const Routes = [
  {
    path: '/dashboard',
    exact: true,
    component: lazy(() => import('src/components/dashboard'))
  },
  {
    path: '/dashboard:keys',
    exact: true,
    component: lazy(() => import('src/components/dashboard'))
  },
  {
    path: '/dashboard/view/:id',
    exact: true,
    component: lazy(() => import('src/components/dashboard/View'))
  }
];

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard" />
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      ...Routes,
    ]
  }
];
