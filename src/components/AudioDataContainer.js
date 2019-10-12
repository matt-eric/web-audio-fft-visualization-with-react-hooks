import React from 'react';
import VisualDemo from './VisualDemo';
import soundFile from '../audio/GummyBearz.mp3'

class AudioDataContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      audioData: {}
    };
  }

  initializeAudioAnalyser() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioFile = new Audio();
    const audioContext = new AudioContext();
    const source = audioContext.createMediaElementSource(audioFile);
    const analyser = audioContext.createAnalyser();
    audioFile.src = soundFile;
    analyser.fftSize = 64
    source.connect(audioContext.destination);
    source.connect(analyser);
    audioFile.play();
      this.setState({
        audioData: analyser
      })
  }

  componentDidMount(){
    this.initializeAudioAnalyser()
  }

  render(){

    return (
      <div>
        <VisualDemo
          audioData={this.state.audioData}
        />
      </div>
    );
  }
}

export default AudioDataContainer;
