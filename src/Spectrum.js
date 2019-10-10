import p5 from "p5";
import "p5/lib/addons/p5.sound";


export default function Spectrum(p){
    let canvas;

    p.setup = () => {
      canvas = p.createCanvas(300, 200);
      p.noStroke();
      let fft = new p5.FFT(0.9, 128);
    }

    p.draw = () => {
      p.background('orangered');
      p.ellipse(150, 100, 100, 100);
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) //Make sure the canvas has been created
        p.fill(newProps.color);
    }
}
