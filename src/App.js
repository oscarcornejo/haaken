import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Coder!
        </p>
        <a
          className="App-link"
          href="https://github.com/oscarcornejo/haaken"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check the Repository on Github ;)
        </a>
      </header>
    </div>
  );
}

export default App;
