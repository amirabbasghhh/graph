import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './styles/fonts.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from "@mui/material";

import theme from './mui/theme.js';

const client = new ApolloClient({
  uri: "https://eu-west-2.cdn.hygraph.com/content/clz07snza005407wh3gr028u2/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ApolloProvider>
      
)
