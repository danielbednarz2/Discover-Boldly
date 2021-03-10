import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://warm-shore-09791.herokuapp.com/graphql',
    cache: new InMemoryCache()
})

export default client