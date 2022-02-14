import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://cajoo-staging.hasura.app/v1/graphql`,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhOWIxNzg5Zi1lOWVlLTQwMWYtYTBiMC0xODYzODY1NjViOTEiLCJ1c2VybmFtZSI6ImFkbWluQGNham9vLmV1IiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbImFkbWluIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImFkbWluIiwieC1oYXN1cmEtdXNlci1pZCI6ImE5YjE3ODlmLWU5ZWUtNDAxZi1hMGIwLTE4NjM4NjU2NWI5MSIsIngtaGFzdXJhLXpvbmVzIjoie2VzLGZyfSJ9LCJpYXQiOjE2NDQ4NDI0MTcsImV4cCI6MTY0NDg1NjgxN30.p5OZF5WUrwHJ6T1sCS5M6IRiX2kwRqj7WXKQG25yMhY`,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
