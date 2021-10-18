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
import EnglishMessages from "./pages/English";
import HistoryMessages from "./pages/History";
import MathMessages from "./pages/Math";
import ScienceMessages from "./pages/Science";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";
import SideBar from "./components/SideBar";
import SingleMessage from "./pages/SingleMessage";
import img1 from "./assets/Dallas-TX.jpg";

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
    <div style={{backgroundColor: "#DFDEDD", backgroundImage: "url(" + img1 + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'}}>
        <Header />
        <Route exact path="/">
          <div className="columns">
            <div className="column is-one-third" style={{display: "flex"}}>
              <div className="container is-pulled-right">
                <SideBar />
              </div>
            </div>
            <div className="column">
              <AllMessages />
            </div>
          </div>
        </Route>
        <Route exact path="/English">
          <div className="columns">
              <div className="column is-one-third">
                <div className="container is-pulled-right">
                  <SideBar />
                </div>
              </div>
              <div className="column">
                <EnglishMessages />
              </div>
            </div>
        </Route> 
        <Route exact path="/History">
          <div className="columns">
              <div className="column is-one-third">
                <div className="container is-pulled-right">
                  <SideBar />
                </div>
              </div>
              <div className="column">
                <HistoryMessages />
              </div>
            </div>
        </Route> 
        <Route exact path="/Math">
          <div className="columns">
              <div className="column is-one-third">
                <div className="container is-pulled-right">
                  <SideBar />
                </div>
              </div>
              <div className="column">
                <MathMessages />
              </div>
            </div>
        </Route> 
        <Route exact path="/Science">
          <div className="columns">
              <div className="column is-one-third">
                <div className="container is-pulled-right">
                  <SideBar />
                </div>
              </div>
              <div className="column">
                <ScienceMessages />
              </div>
            </div>
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

        <Footer />
    </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
