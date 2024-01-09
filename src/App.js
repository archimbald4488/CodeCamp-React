import logo from './logo.svg';
import './App.css';
import { Button } from './Components/index.js'

console.log("Testing!")

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Button
                    className="button-instance"
                    color="primary"
                    divClassName="design-component-instance-node"
                    size="l"
                    state="enabled"
                    text="Test"
                    variant="fill"
      />;

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React test
        </a>
      </header>
    </div>
  );
}

export default App;
