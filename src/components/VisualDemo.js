import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import '../stylesheets/App.scss';

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
}));

export default function VisualDemo(props) {

    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleFrequencyChanges = (newValue) => {
      setValue(newValue);
    };

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

    return (

      <div>

        <Paper
          id='smallBox'
          onClick={() => runCounter()}
        >Start</Paper>

        <div className={classes.flexContainer}>
          {props.frequencyBandArray.map((num) =>
            <Paper
              id={'largeBox'}
              style={{
                height: Math.pow(value[num], 1.025),
                backgroundColor: `rgb(0, ${value[num]}, 206)`
              }}
              elevation={4}
              key={num}
              >
            </Paper>
          )}
        </div>

      </div>

    );

}
