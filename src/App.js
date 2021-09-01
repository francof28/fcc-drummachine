import React from 'react';
import './App.css';
import Pad from './Pad'

const audioBank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      display: 'Press a Pad',
      volume: 1
    }
  }
  
  handleChange = (value) => {
    this.setState({
      display: value
    })
  }

  setVolume = (vol) => {
    this.setState({
      volume: vol
    })
  }

  render () {
    return (
      <div className="App" id="drum-machine">
        <header className="App-header">
          <h1>Drum Machine</h1>
        </header>
        <div id="display" className="display">
        {audioBank.map(clip => 
          <Pad key={clip.id} clip={clip} audio={clip.url} handler={this.handleChange} volume={this.state.volume}/>
        )}
        <h2>{this.state.display}</h2>
        <h4>Volume</h4>
        <input type="range"
          step="0.01"
          onChange={(e) => this.setVolume(e.target.value)}
          value={this.state.volume}
          max="1"
          min="0"
        />  
        </div>
        <p className="Cred">by francof28</p>
      </div>
    );
  }
}

export default App;
