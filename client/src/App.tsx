import React  from 'react'
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4002/graphql',
  headers: {
    authorization: `Bearer your-token`,
  },
});


const App = () => {
  return (
      <ApolloProvider client={client}>
        <div className="App">
          Hello World!
        </div>
      </ApolloProvider>
  );
};

export default App
