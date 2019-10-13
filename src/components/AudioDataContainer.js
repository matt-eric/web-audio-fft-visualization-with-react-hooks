import React from 'react';
import VisualDemo from './VisualDemo';
import soundFile from '../audio/GummyBearz.mp3'

class AudioDataContainer extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        audioData: {}
      }
      this.frequencyBandArray = [...Array(25).keys()].reverse()
      this.audioFile = new Audio();
      this.audioContext = new AudioContext();
      this.source = this.audioContext.createMediaElementSource(this.audioFile);
      this.analyser = this.audioContext.createAnalyser();
  }

  initializeAudioAnalyser() {
    this.audioFile.src = soundFile;
    this.analyser.fftSize = 64
    this.source.connect(this.audioContext.destination);
    this.source.connect(this.analyser);
    this.audioFile.play();
      this.setState({
        audioData: this.analyser
      })
  }

  getFrequencyData = (num, callback) => {
    const bufferLength = this.state.audioData.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    this.state.audioData.getByteFrequencyData(dataArray)
    callback(dataArray)
  }

  componentDidMount(){
    this.initializeAudioAnalyser()
  }

  render(){

    return (
      <div>
        <VisualDemo
          frequencyBandArray={this.frequencyBandArray}
          getFrequencyData={this.getFrequencyData}
        />
      </div>
    );
  }
}

export default AudioDataContainer;
