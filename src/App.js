import './App.css';
import  { BrowserRouter , Switch, Route} from "react-router-dom";
import Home from "./pages/Home.js";
import Query from "./pages/Query.js";


function App() {
  return (
    <div className="App">
     <BrowserRouter>

     <Switch>

        <Route path="/" exact component={Home} /> 
        <Route path="/query" exact component={Query} /> 

     </Switch>

     </BrowserRouter>
    </div>
  );
}

export default App;
