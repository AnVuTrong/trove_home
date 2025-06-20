import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client.apollo';
import { ThemeProvider, AuthProvider } from './contexts';
import AppRoutes from './routes/AppRoutes.route';

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ThemeProvider>
          <Router>
            <AppRoutes />
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
