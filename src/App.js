import React, { Component } from 'react';
import logo from './slash-logo.png';
import './App.css';
import { Button } from 'react-bootstrap';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class App extends Component {
  constructor() {
    super();
    //this.displayCamera = this.showComments.bind(this);
    this.state = {
        displayCamera: false,
    };
  }

  displayCamera = () => {
    this.setState({
        displayCamera: true
    })
  }

  onTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }
 
  onCameraError (error) {
    console.error('onCameraError', error);
  }
 
  onCameraStart (stream) {
    console.log('onCameraStart');
  }
 
  onCameraStop () {
    console.log('onCameraStop');
  }
 
  render () {
    return (
      <div className="App">
        <br /><br /><br /><br />
        <img src={logo} alt="Logo" className="logo"/>
        <br /><br /><br />
        <Button variant="primary" size="lg" onClick={ this.displayCamera }>
          Take a Photo
        </Button>
        <br /><br /><br /><br /><br />
        {this.state.displayCamera ?         
          <Camera 
            onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
            onCameraError = { (error) => { this.onCameraError(error); } }
            // idealFacingMode = {FACING_MODES.ENVIRONMENT}
            // idealResolution = {{width: 480, height: 640}}
            // imageType = {IMAGE_TYPES.JPG}
            imageCompression = {0.97}
            isMaxResolution = {true}
            isImageMirror = {false}
            isDisplayStartCameraError = {true}
            sizeFactor = {1}
            onCameraStart = { (stream) => { this.onCameraStart(stream); } }
            onCameraStop = { () => { this.onCameraStop(); } }
          />  : null}
      </div>
    );
  }
}
 

export default App;
