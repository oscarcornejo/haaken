// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import PageNotFound from "./views/PageNotFound";
import Cart from "./views/Cart/Cart";
import Footer from "./components/Footer/Footer";

// CSS
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />

      <div className="main">
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route exact path="/category/:idCategory" component={ItemListContainer} />
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
