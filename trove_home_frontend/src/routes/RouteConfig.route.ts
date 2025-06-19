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
  ABOUT: {
    path: ROUTES.ABOUT,
    translationKey: 'navigation.about',
    showInNavigation: true,
    icon: 'M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
  },
  PRICING: {
    path: ROUTES.PRICING,
    translationKey: 'navigation.pricing',
    showInNavigation: true,
    icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.467-.22-2.121-.659-1.172-.879-1.172-2.303 0-3.182s3.07-.879 4.242 0L15 9m-6 0h6'
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
  },
  LOGIN: {
    path: ROUTES.LOGIN,
    translationKey: 'navigation.login',
    showInNavigation: false
  }
}; 