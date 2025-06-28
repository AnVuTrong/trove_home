import Keycloak from 'keycloak-js';
import { KEYCLOAK_CONFIG } from './constants/Keycloak.constant';

const keycloak = new Keycloak(KEYCLOAK_CONFIG);
 
export default keycloak; 