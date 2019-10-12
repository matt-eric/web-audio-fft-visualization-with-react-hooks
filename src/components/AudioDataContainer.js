import React from 'react';
import VisualDemo from './VisualDemo';
import soundFile from '../audio/GummyBearz.mp3'

class AudioDataContainer extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     audioData: {},
     frequencyBands: []
   };
 }

  componentDidMount(){

    let audioContext
    let source
    let audioFile
    let analyser
    let AudioContext;

    AudioContext = window.AudioContext || window.webkitAudioContext;
    audioFile = new Audio();
    audioFile.src = soundFile;
    audioContext = new AudioContext();
    source = audioContext.createMediaElementSource(audioFile);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 64

    source.connect(audioContext.destination);
    source.connect(analyser);

    let bufferLength = analyser.frequencyBinCount;
    let dataArray = new Uint8Array(bufferLength);

    audioFile.play();
      this.setState({
        audioData: analyser,
        frequencyBands: dataArray
      })
  }

  getFrequencyData = (num) => {
    let bufferLength = this.state.audioData.frequencyBinCount;
    let dataArray = new Uint8Array(bufferLength);
    let audioData = this.state.audioData
    audioData.getByteFrequencyData(dataArray)
    console.log(dataArray[num])
    this.low = dataArray[num]
  }

  runCounter = () => {
    setInterval(() =>
      this.getFrequencyData(0)
    , 1);
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
