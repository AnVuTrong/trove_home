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
    icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
  },
  COMPONENT_TEST: {
    path: ROUTES.COMPONENT_TEST,
    translationKey: 'navigation.componentTest',
    showInNavigation: false, // Hidden page as requested
    icon: 'M9.75 3v8.25a1.125 1.125 0 01-1.125 1.125H6a1.125 1.125 0 01-1.125-1.125V3c0-.621.504-1.125 1.125-1.125h2.625c.621 0 1.125.504 1.125 1.125zm6 0v8.25a1.125 1.125 0 01-1.125 1.125H12a1.125 1.125 0 01-1.125-1.125V3c0-.621.504-1.125 1.125-1.125h2.625c.621 0 1.125.504 1.125 1.125z'
  },
  NOT_FOUND: {
    path: ROUTES.NOT_FOUND,
    translationKey: 'navigation.notFound',
    showInNavigation: false
  }
}; 