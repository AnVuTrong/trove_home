import { ROUTES } from '../constants/Routes.constant';

export interface RouteConfig {
  path: string;
  translationKey: string;
  showInNavigation: boolean;
  icon?: string;
}

export const routeConfig: Record<keyof typeof ROUTES, RouteConfig> = {
  HOME: {
    path: ROUTES.HOME,
    translationKey: 'navigation.home',
    showInNavigation: true,
  },
  ABOUT: {
    path: ROUTES.ABOUT,
    translationKey: 'navigation.about',
    showInNavigation: true,
  },
  PRICING: {
    path: ROUTES.PRICING,
    translationKey: 'navigation.pricing',
    showInNavigation: true,
  },
  COMPONENT_TEST: {
    path: ROUTES.COMPONENT_TEST,
    translationKey: 'navigation.componentTest',
    showInNavigation: true, // Hidden page as requested
  },
  NOT_FOUND: {
    path: ROUTES.NOT_FOUND,
    translationKey: 'navigation.notFound',
    showInNavigation: false
  },
  LOGIN: {
    path: ROUTES.LOGIN,
    translationKey: 'navigation.login',
    showInNavigation: true
  }
}; 