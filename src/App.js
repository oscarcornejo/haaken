// Components
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "./App.css";
import Home from "./views/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Router>
      <NavBar />

      <div className="main">
        <Switch>
          <Route path="/detalle-producto/:id" component={ItemDetailContainer} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
