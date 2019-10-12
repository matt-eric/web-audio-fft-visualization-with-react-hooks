import React from 'react';
import FrequencyBands from './FrequencyBands';
import Paper from '@material-ui/core/Paper';
import '../stylesheets/App.scss';

export default function VisualDemo(props) {

    function getFrequencyData(num){
      const audioData = props.audioData
      const bufferLength = audioData.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      audioData.getByteFrequencyData(dataArray)
      handleFrequencyChanges(dataArray)
    }

    function runCounter (){
      setInterval(() =>
        getFrequencyData(0)
      , 10);
    }

    const [value, setValue] = React.useState(0);

    const handleFrequencyChanges = (newValue) => {
      setValue(newValue);
    };

    return (

      <div>

        <Paper
          id='smallBox'
          onClick={() => runCounter()}
        >Start</Paper>

        <FrequencyBands
          arr={[...Array(25).keys()]}
          amplitudeArr={value}
        />

      </div>

    );

}
