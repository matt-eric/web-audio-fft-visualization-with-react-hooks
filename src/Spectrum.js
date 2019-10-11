import React from 'react';
import p5 from "p5";
import "p5/lib/addons/p5.sound";
import audio from './GummyBearz.wav'
import Switch from '@material-ui/core/Switch';

export default function Spectrum(p){

    let canvas
    let song;
    let fft;
    let button;

    p.toggleSong = () => {
      if (song.isPlaying()) {
        song.pause();
      } else {
        song.play();
      }
    }

    p.setup = () => {
      canvas = p.createCanvas(300, 200);
      song.play()
      fft = new p5.FFT();
      song.amp(0.2);
    }

    p.preload = () => {
      song = p.loadSound(audio)
    }

    p.draw = () => {

      p.background(0);

      var spectrum = fft.analyze();
      p.noStroke();
      p.fill(0,255,0); // spectrum is green
      for (var i = 0; i< spectrum.length; i++){
        var x = p.map(i, 0, spectrum.length, 0, p.width);
        var h = -p.height + p.map(spectrum[i], 0, 255, p.height, 0);
        let aa = fft.getEnergy(20, 60)
        let bb = fft.getEnergy(60, 250)
        let cc = fft.getEnergy(250, 1500)
        let dd = fft.getEnergy(1500, 4000)
        let ee = fft.getEnergy(4000, 7000)
        let ff = fft.getEnergy(7000, 20000)
        let aaint = Math.floor(aa)
        p.text(aaint, 100, 100)
        p.rect(x, p.height, p.width / spectrum.length, h )
      }
    }

    return(
      <div>
        <button>
        Hello World
        </button>
      </div>
    )

}
