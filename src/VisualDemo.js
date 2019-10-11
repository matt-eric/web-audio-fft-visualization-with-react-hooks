import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Spectrum from './Spectrum';
import './App.scss';

class VisualDemo extends Component {
  constructor(){
    super();
    this.state = {
      playing: false
    };
  }

  componentDidMount(){
    debugger
  }

  render() {
    return (
      <div>
        <P5Wrapper
          sketch={Spectrum}
          playing={this.state.playing}>
        </P5Wrapper>
      </div>
    );
  }
}

export default VisualDemo;
