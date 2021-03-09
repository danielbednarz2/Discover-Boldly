import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './utils/apolloClient'

ReactDOM.render(
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>,
    document.getElementById('root')
  );