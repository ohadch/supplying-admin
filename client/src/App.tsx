import React  from 'react'
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {TodoList} from "./components/TodoList";

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  headers: {
    authorization: `Bearer your-token`,
  },
});


const App = () => {
  return (
      <ApolloProvider client={client}>
        <div className="App">
          <TodoList />
        </div>
      </ApolloProvider>
  );
};

export default App
