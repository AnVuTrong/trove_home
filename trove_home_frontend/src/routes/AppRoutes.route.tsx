import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants/Routes.constant';
import { lazyLoad } from '../utils/LazyLoad.util';

// Layouts
import MainLayout from '../layouts/MainLayout.layout';

// Lazy loaded pages
const HomePage = lazyLoad(() => import('../pages/Home.page'), 'Loading Home...');
const ComponentTestPage = lazyLoad(() => import('../pages/ComponentTestPage.page'), 'Loading Components...');
const NotFoundPage = lazyLoad(() => import('../pages/NotFound.page'), 'Loading...');

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.COMPONENT_TEST} element={<ComponentTestPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes; 