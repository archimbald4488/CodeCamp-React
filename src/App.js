//import logo from './logo.svg';
import './App.css';
import { Button } from './Components/index.js'

console.log("Testing!")

function App() {
  return (
    <div className="App">
      <div className="main-view">
      <div className="div">
        <Button
          className="button-instance"
          color="primary"
          divClassName="design-component-instance-node"
          size="l"
          state="enabled"
          text="Todos"
          variant="fill"
        />
        <p className="p">Here’s what you should do in today’s weather:</p>
        <div className="overlap-group">
          <div className="text-wrapper-2">+25°C</div>
          <div className="text-wrapper-3">Lappeenranta</div>
          <img className="icon-temperature" alt="Icon temperature" src="icon-temperature.png" />
          <img className="icon-location" alt="Icon location" src="icon-location.png" />
        </div>
        <div className="jan-fri">Jan 5,&nbsp;&nbsp;Fri</div>
        <img className="sun" alt="Sun" src="sun.svg" />
        <p className="text-wrapper-4">1 2 3 4 5 6</p>
        <div className="text-wrapper-5">The weather right now:</div>
        <p className="welcome-hope-you-re">
          <span className="span">Welcome!</span>
          <span className="text-wrapper-6">
            {" "}
            <br />
            <br />
            Hope you’re having good morning./It’s freezing today!
          </span>
        </p> 
      </div>
    </div>

  </div>

  )}
      
    

export default App;
