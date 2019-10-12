import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../stylesheets/App.scss';

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
}));

export default function FrequencyBands(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.flexContainer}>
        {props.arr.reverse().map((num) =>
          <Paper
            id={'largeBox'}
            style={{
              height: Math.pow(props.amplitudeArr[num], 1.025),
              backgroundColor: `rgb(0, ${props.amplitudeArr[num]}, 206)`
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
