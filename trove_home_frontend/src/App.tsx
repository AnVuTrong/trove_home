import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client.apollo';
import AppRoutes from './routes/AppRoutes.route';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AppRoutes />
      </Router>
    </ApolloProvider>
  );
}

export default App;
