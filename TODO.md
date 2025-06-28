# Keycloak Integration TODO List

## 1. Run Keycloak Container
- [x] Run a docker-compose.yml file for the Keycloak service, setting the admin username and password (**added docker-compose.yml**)
- [x] Launch the container using `docker-compose up` (see README for instructions)
- [ ] Access and set up the Keycloak admin console (visit http://localhost:8080 and configure realm/client)

## 2. Connect Website Login
- [ ] Create a new Realm for your website in Keycloak *(pending manual step)*
- [ ] Create a Client for your web app, configuring valid redirect URIs *(pending manual step)*
- [x] Integrate the appropriate Keycloak adapter/library (`keycloak-js` & `@react-keycloak/web`) into the **frontend**

## 3. Separate Public & Private Pages
- [x] Leave public routes (e.g., landing page) open
- [x] Use a route guard (`RequireAuth`) to protect private pages, checking for Keycloak authentication
- [x] Redirect unauthenticated users to the Keycloak login page via `RequireAuth`

## 4. Create User & Admin Dashboards
- [ ] Define user and admin roles in Keycloak *(manual realm task)*
- [ ] Assign roles to your users *(manual realm task)*
- [x] In your application, read the user's role from the access token (role extraction implemented)
- [x] Conditionally render admin-specific UI components and secure backend API endpoints based on the user's role (`RequireAuth requireAdmin`)

## 5. Secure the Connection
- [ ] Use HTTPS for both your website and Keycloak in production *(pending ops step)*
- [x] Handle access and refresh tokens securely (kept only in Keycloak JS memory)
- [x] Enable PKCE (Proof Key for Code Exchange) for enhanced security (`pkceMethod: 'S256'`)

## 6. Enforce Single-Device Login
- [ ] Configure Keycloak's session management policies to limit concurrent sessions for a user *(realm setting `SSO Session Max` → 1)*
- [ ] Set up your realm to automatically revoke previous sessions when a user logs in from a new device *(realm setting `Revoke Refresh Token`)*