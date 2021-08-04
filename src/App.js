import './App.css';
import  { BrowserRouter , Switch, Route} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./pages/Home.js";
import Query from "./pages/Query.js";


function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://countries.trevorblades.com/"
  });

  return (
    <ApolloProvider client={client}>
    <div className="App">
     <BrowserRouter>

     <Switch>

        <Route path="/" exact component={Home} /> 
        <Route path="/query" exact component={Query} /> 

     </Switch>

     </BrowserRouter>
    </div>
    </ApolloProvider>
  );
}

export default App;
