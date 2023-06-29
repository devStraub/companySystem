import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/pages/home';
import List from './components/pages/list';
import Edit from './components/pages/edit';

export const routes = [
  {
    path: '/',
    component: <Home/>,
    exact: true,
    label: 'Home', 
    icon: 'pi pi-fw pi-home',
  },   
  {
    path: '/about',
    component: <List/>,
    exact: true,
    label: 'List', 
    department: 'Financial',
    operation: 'Consultations',
  },       
  {
    path: '/about',
    component: <Edit/>,
    exact: true,
    label: 'Edit',
    department: 'Financial',
    operation: 'Registrations',     
  },    
];

export const RouteList = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        element={route.component}
      />
    ))}
  </Routes>
);

export default {
  RouteList,
  routes
}
