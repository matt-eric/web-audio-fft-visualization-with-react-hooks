import React from 'react';
import VisualDemo from './VisualDemo';
import soundFile from './GummyBearz.mp3'

export default function VisualDemoContainer() {

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
  analyser.fftSize = 32
  audioFile.src = soundFile;
  audioFile.play();


  return (
    <div>

      <VisualDemo/>

    </div>
  );
}
