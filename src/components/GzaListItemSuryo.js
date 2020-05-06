import React from 'react'
import { makeStyles, Tooltip } from '@material-ui/core';

const format = n => {
  return n.toLocaleString();
};

function GzaListItemSuryo({
  genza, 
  juchu, 
}) {
  const classes = useStyles();
  genza = Number(genza);
  juchu = Number(juchu);
  const hikig = genza - juchu;
  return (
    <span className={classes.root}>
      <span className={classes.grow}>
        現残　受注　引き後：
      </span>
      <Su title="現残" className={classes.genza}>{genza}</Su>
      <Su title="受注" className={classes.juchu}>{juchu}</Su>
      <Su title="引き後" className={classes.hikig}>{hikig}</Su>
    </span>
  )
}

export default GzaListItemSuryo;

const Su = ({
  title, 
  children, 
  ...other
}) => {
  return (
    <Tooltip title={title}>
      <span {...other}>{children}</span>
    </Tooltip>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex', 
  }, 
  grow: {
    flexGrow: 1, 
    textAlign: 'right', 
    fontSize: '.7rem', 
    fontWeight: 700, 
  }, 
  genza: {
    width: 50, 
    textAlign: 'right',
  }, 
  juchu: {
    width: 50, 
    textAlign: 'right',
  }, 
  hikig: {
    width: 50, 
    textAlign: 'right',
  }, 
  
}))