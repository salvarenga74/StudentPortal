import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AllMessages from "./pages/AllMesages";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";
import SideBar from "./components/SideBar";
import SingleMessage from "./pages/SingleMessage";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className="columns">
          <div className="column">
            <SideBar />
          </div>
          <div className="column is-6">
            <Route exact path="/">
              <AllMessages />
            </Route>

            <Route exact path="/login">
              <LoginPage />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/messages/:messageId">
              <SingleMessage />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
