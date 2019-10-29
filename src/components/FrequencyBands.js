import React, { useRef }  from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import '../stylesheets/App.scss';

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: '25%'
  },
  freqBand
}));

export default function FrequencyBands(props, forwardedRef) {

    const classes = useStyles();

    debugger

    return (

      <div className={classes.flexContainer}>

        {props.frequencyBandArray.map((num) =>
          <Paper
            id={'frequencyBands'}
            style={{
              height: forwardedRef[num],
              backgroundColor: `rgb(0, 255, ${forwardedRef[num]})`}}
            elevation={4}
            key={num}/>)}

      </div>

    );
}
