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

    function runCounter (){
      setInterval(() =>
        props.getFrequencyData(0, handleFrequencyChanges)
      , 15);
    }

    return (

      <div>

        <div>
          <Tooltip
            title="Start"
            aria-label="Start"
            placement="right"
          >
            <IconButton
              id='startButton'
              onClick={() => runCounter()}
            >
              <EqualizerIcon/>
            </IconButton>
          </Tooltip>
        </div>

        <div className={classes.flexContainer}>
          {props.frequencyBandArray.map((num) =>
            <Paper
              id={'frequencyBands'}
              style={{
                height: Math.pow(value[num], 1.025),
                backgroundColor: `rgb(0, 255, ${value[num]})`,
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
