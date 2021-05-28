// Components
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Router>
      <NavBar />

      <div className="main">
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route exact path="/category/:id" component={ItemListContainer} />
          <Route exact path="/item/:id" component={ItemDetailContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
