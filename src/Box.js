import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './App.scss';

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
}));

export default function Box(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.flexContainer}>
        {props.arr.map((num) =>

          <Paper
            id={num === props.number ? 'largeBox' : 'smallBox'}
            style={{height: props.low}}
            elevation={6}
            key={num}>
          </Paper>
        )}
        {props.low}
      </div>
    </div>
  );
}
