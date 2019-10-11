import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import App from './App';
import Slider from './Slider';
import Paper from '@material-ui/core/Paper';
import p5 from "p5";
import "p5/lib/addons/p5.sound";
import './App.scss';


export default function VisualDemo() {

  let val

  const [value, setValue] = React.useState(val);

  const handleFreqChange = (newValue) => {
    setValue(newValue);
  };

  function spectrum(p){
    let canvas
    let song
    let fft;
    let button;

    p.setup = () => {

      canvas = p.createCanvas(300, 200);
      fft = new p5.FFT(0.9, 16);
      debugger
      // song.amp(0.2);
    }

    // p.preload = () => {
    //   p.loadSound(song)
    // }

    p.draw = () => {
      p.background(0);
      var spectrum = fft.analyze();
      p.noStroke();
      val = spectrum[0]
      handleFreqChange(val)
      debugger

    }

  }

    return (

      <div>

        <P5Wrapper
          sketch={spectrum}
          hello={'hello'}
        >
        </P5Wrapper>

        <Paper
          id='smallBox'
          style={{height: '50'}}
          elevation={2}
        >
        {value}
        </Paper>

        <Slider
        value={value}
        />

      </div>

    );

}
