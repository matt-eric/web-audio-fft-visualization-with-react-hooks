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
  }
}));

export default function VisualDemo(props) {

    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleFrequencyChanges = (newValue) => {
      setValue(newValue);
    };

    function runCounter (){
      setInterval(() =>
        props.getFrequencyData(0, handleFrequencyChanges)
      , 10);
    }

    return (

      <div>

      <Tooltip
        title="Start"
        aria-label="Start"
        placement="right"
      >
        <IconButton
          id='smallBox'
          onClick={() => runCounter()}
        >
          <EqualizerIcon/>
        </IconButton>
      </Tooltip>

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
