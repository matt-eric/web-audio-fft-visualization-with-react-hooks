import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}));

export default function Box(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.flexContainer}>
        {props.arr.map((num) =>
          <Paper id={num === props.number ? 'largeBox' : 'smallBox'} key={num}>
          </Paper>
        )}
      </div>
    </div>
  );
}
