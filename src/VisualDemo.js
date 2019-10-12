import React, { Component } from 'react';
import App from './App';
import Box from './Box';
import Paper from '@material-ui/core/Paper';
import './App.scss';

export default function VisualDemo(props) {

    function getFrequencyData(num){
      let bufferLength = props.audioData.frequencyBinCount;
      let dataArray = new Uint8Array(bufferLength);
      let audioData = props.audioData
      audioData.getByteFrequencyData(dataArray)
      handleFrequencyChanges(dataArray)
    }

    function runCounter (){
      setInterval(() =>
        getFrequencyData(0)
      , 25);
    }

    const [value, setValue] = React.useState(0);

    const handleFrequencyChanges = (newValue) => {
      setValue(newValue);
    };

    return (

      <div>

        <Paper
          id='smallBox'
          elevation={2}
          onClick={() => runCounter()}
        >
          Start
        </Paper>

        <Box
          arr={[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]}
          amplitudeArr={value}
        />

      </div>

    );

}
