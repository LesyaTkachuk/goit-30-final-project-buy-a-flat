import { lazy } from 'react';

export default [
  {
    name: 'Home',
    path: '/',
    exact: true,
    showInMenu: false,
    component: lazy(() =>
      import('./pages/Home' /* webpackChunkName: "home-page" */),
    ),
    private: false,
  },
  {
    name: 'Planning',
    path: '/planning',
    exact: true,
    showInMenu: true,
    component: lazy(() =>
      import('./pages/Planning' /* webpackChunkName: "planning-page" */),
    ),
    private: true,
  },
  {
    name: 'Expenses',
    path: '/expenses',
    exact: true,
    showInMenu: true,
    component: lazy(() =>
      import('./pages/Expenses' /* webpackChunkName: "expenses-page" */),
    ),
    private: true,
  },
  {
    name: 'Dynamics',
    path: '/dynamics',
    showInMenu: true,
    exact: true,
    component: lazy(() =>
      import('./pages/Dynamics' /* webpackChunkName: "dynamics-page" */),
    ),
    private: true,
  },
  {
    name: 'Navigation',
    path: '/navigation',
    showInMenu: false,
    exact: true,
    component: lazy(() =>
      import('./pages/Navigation' /* webpackChunkName: "navigation-page" */),
    ),
    private: true,
  },
];
