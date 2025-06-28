import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client.apollo';
import { ThemeProvider, AuthProvider } from './contexts';
import AppRoutes from './routes/AppRoutes.route';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';

function App() {
  return (
    <ApolloProvider client={client}>
      <ReactKeycloakProvider authClient={keycloak} initOptions={{ onLoad: 'check-sso', pkceMethod: 'S256' }}>
        <AuthProvider>
          <ThemeProvider>
            <Router>
              <AppRoutes />
            </Router>
          </ThemeProvider>
        </AuthProvider>
      </ReactKeycloakProvider>
    </ApolloProvider>
  );
}

export default App;
