import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client.apollo';
import { ThemeProvider } from './contexts/ThemeContext.context';
import AppRoutes from './routes/AppRoutes.route';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
