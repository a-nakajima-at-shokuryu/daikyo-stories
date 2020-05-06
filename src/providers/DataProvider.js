import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'; 
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http'; 
const client = new ApolloClient({
  cache: new InMemoryCache(), 
  link: new HttpLink({
    uri: 'https://daiei-apollo-one.now.sh/', 
  })
});
const DataProvider = ({
  children, 
}) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default DataProvider
