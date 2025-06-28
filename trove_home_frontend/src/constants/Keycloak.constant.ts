export const KEYCLOAK_CONFIG = {
  url: process.env.REACT_APP_KEYCLOAK_URL || 'http://localhost:8080',
  realm: process.env.REACT_APP_KEYCLOAK_REALM || 'trove',
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT || 'trove_frontend',
}; 