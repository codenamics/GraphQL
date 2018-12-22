import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LaunchDetails from "./components/LaunchDetails";
import Launches from "./components/Launches";

const client = new ApolloClient({
  uri: "/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <h1> SpaceX </h1>
            <Route exact path="/" component={Launches} />
            <Route
              exact
              path="/launch/:flight_number"
              component={LaunchDetails}
            />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
