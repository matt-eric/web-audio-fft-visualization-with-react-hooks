import React from 'react';
import VisualDemo from './VisualDemo';
import soundFile from './GummyBearz.mp3'

class AudioDataContainer extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     audioData: {},
     frequencyBands: []
   };
   this.low = 0
 }

  componentDidMount(){

    let audioContext
    let source
    let audioFile
    let analyser
    let AudioContext;

    AudioContext = window.AudioContext || window.webkitAudioContext;
    audioFile = new Audio();
    audioContext = new AudioContext();
    source = audioContext.createMediaElementSource(audioFile);
    source.connect(audioContext.destination);
    analyser = audioContext.createAnalyser();
    source.connect(analyser);
    analyser.fftSize = 64
    audioFile.src = soundFile;
    let bufferLength = analyser.frequencyBinCount;
    audioFile.play();
    let dataArray = new Uint8Array(bufferLength);

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
    , 50);
  }

  render(){

    return (
      <div>
        <VisualDemo
          frequencyBands={this.state.frequencyBands}
          audioData={this.state.audioData}
          getFrequencyData={this.runCounter}
          num={this.low}
        />

      </div>
    );

  }

}

export default AudioDataContainer;
