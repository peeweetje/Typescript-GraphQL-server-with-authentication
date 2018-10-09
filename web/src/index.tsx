import * as React from "react";
import * as ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { Routes } from "./Routes";
import registerServiceWorker from "./registerServiceWorker";

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "include"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
