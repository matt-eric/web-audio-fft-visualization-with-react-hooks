import React from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { makeStyles } from '@material-ui/core/styles';
import '../stylesheets/App.scss';

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: '25%'
  }
}));

export default function VisualDemo(props) {

    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleFrequencyChanges = (newValue) => {
      setValue(newValue);
    };

    function runSpectrum(){
      props.getFrequencyData(handleFrequencyChanges)
      requestAnimationFrame(runSpectrum)
    }

    function handleStartBottonClick(){
      props.initializeAudioAnalyser()
      requestAnimationFrame(runSpectrum)
    }

    return (

      <div>

        <div>

          <Tooltip
            title="Start"
            aria-label="Start"
            placement="right">

            <IconButton
              id='startButton'
              onClick={() => handleStartBottonClick()}
              disabled={!!props.audioData ? true : false}>

              <EqualizerIcon/>

            </IconButton>

          </Tooltip>

        </div>

        <div className={classes.flexContainer}>

          {props.frequencyBandArray.map((num) =>
            <Paper
              id={'frequencyBands'}
              style={{
                height: value[num],
                backgroundColor: `rgb(0, 255, ${value[num]})`}}
              elevation={4}
              key={num}/>)}

        </div>

      </div>

    );

}
