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
  GRAPHQL: {
    path: ROUTES.GRAPHQL,
    translationKey: 'navigation.graphql',
    showInNavigation: true,
    icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
  },
  NOT_FOUND: {
    path: ROUTES.NOT_FOUND,
    translationKey: 'navigation.notFound',
    showInNavigation: false
  }
}; 