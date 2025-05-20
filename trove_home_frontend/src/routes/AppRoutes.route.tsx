import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants/Routes.constant';
import { lazyLoad } from '../utils/LazyLoad.util';
import { useTranslation } from 'react-i18next';

// Layouts
import MainLayout from '../layouts/MainLayout.layout';

// Lazy loaded pages
const HomePage = lazyLoad(() => import('../pages/Home.page'), 'Loading Home...');
const GraphQLPage = lazyLoad(() => import('../pages/GraphQL.page'), 'Loading GraphQL Explorer...');
const NotFoundPage = lazyLoad(() => import('../pages/NotFound.page'), 'Loading...');

const AppRoutes: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.GRAPHQL} element={<GraphQLPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes; 