import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Router } from "@reach/router";

import "./App.css";
import logo from "./logo.png";

import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container-fluid">
        <img
          className="my-3"
          src={logo}
          alt="SpaceX logo"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
        <Router>
          <Launches path="/" />
          <Launch path="/launch/:flight_number" />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
