import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const api_key = 'af7f79bec4e548d6a6429588fcd7939d';

const app = new Clarifai.App({
  apiKey: api_key
});

const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 9
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  };

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict(api_key, "https://api.clarifai.com").then(
      function (response) {
        console.log(response);
      },
      function (err) {

      }
    );

  };

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        {/*<FaceRecognition />*/}

      </div>
    );
  };
}



export default App;
