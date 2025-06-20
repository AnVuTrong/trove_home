import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants/Routes.constant';
import { lazyLoad } from '../utils/LazyLoad.util';
import RequireAuth from './RequireAuth.component';

// Layouts
import MainLayout from '../layouts/MainLayout.layout';

// Lazy loaded pages
const HomePage = lazyLoad(() => import('../pages/Home.page'), 'Loading Home...');
const AboutPage = lazyLoad(() => import('../pages/About.page'), 'Loading About...');
const PricingPage = lazyLoad(() => import('../pages/Pricing.page'), 'Loading Pricing...');
const ComponentTestPage = lazyLoad(() => import('../pages/hidden/ComponentTestPage.page'), 'Loading Components...');
const NotFoundPage = lazyLoad(() => import('../pages/NotFound.page'), 'Loading...');
const LoginPage = lazyLoad(() => import('../pages/Login.page'), 'Loading Login...');
const DashboardPage = lazyLoad(() => import('../pages/Dashboard.page'), 'Loading Dashboard...');
const AdminDashboardPage = lazyLoad(() => import('../pages/AdminDashboard.page'), 'Loading Admin Dashboard...');

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.PRICING} element={<PricingPage />} />
        <Route path={ROUTES.COMPONENT_TEST} element={<ComponentTestPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.DASHBOARD} element={<RequireAuth><DashboardPage /></RequireAuth>} />
        <Route path={ROUTES.ADMIN} element={<RequireAuth requireAdmin><AdminDashboardPage /></RequireAuth>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes; 