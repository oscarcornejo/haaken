// Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// CSS
import "./App.css";

function App() {
  return (
    <>
      <NavBar />

      <div className="main">
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
