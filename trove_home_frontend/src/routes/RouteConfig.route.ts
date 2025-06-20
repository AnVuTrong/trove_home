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
    icon:
      'M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z'
  },
  ABOUT: {
    path: ROUTES.ABOUT,
    translationKey: 'navigation.about',
    showInNavigation: true,
    icon:
      'M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z'
  },
  PRICING: {
    path: ROUTES.PRICING,
    translationKey: 'navigation.pricing',
    showInNavigation: true,
    icon:
      'M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z'
  },
  COMPONENT_TEST: {
    path: ROUTES.COMPONENT_TEST,
    translationKey: 'navigation.componentTest',
    showInNavigation: false,
  },
  NOT_FOUND: {
    path: ROUTES.NOT_FOUND,
    translationKey: 'navigation.notFound',
    showInNavigation: false
  },
  LOGIN: {
    path: ROUTES.LOGIN,
    translationKey: 'navigation.login',
    showInNavigation: true,
    icon:
      'M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z'
  },
  DASHBOARD: {
    path: ROUTES.DASHBOARD,
    translationKey: 'navigation.dashboard',
    showInNavigation: false
  },
  ADMIN: {
    path: ROUTES.ADMIN,
    translationKey: 'navigation.admin',
    showInNavigation: false
  }
}; 