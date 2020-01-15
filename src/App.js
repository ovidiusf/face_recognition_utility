import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Signin from './components/Signin/Signin';

// define the app used by CLARIFY API
const app = new Clarifai.App({
  apiKey: 'af7f79bec4e548d6a6429588fcd7939d'
});

// All options for the particles.js library
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
      imageUrl: '',
      box: {}, 
    };
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  // Calculates the face location based on the data received from clarifai
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  };

  // sets the state for the box, passing it further
  drawFaceBox = (box) => {
    // console.log(box);
    this.setState({box: box});
  };

  // once detect is clicked, the image is taken and the face will be displayed
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(
        (response) => {
          // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
          this.drawFaceBox(this.calculateFaceLocation(response));
        }
      )
      .catch(err => console.log('error', err));

  };

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} />
        <Navigation />
        <Signin />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />

      </div>
    );
  };
}

export default App;
