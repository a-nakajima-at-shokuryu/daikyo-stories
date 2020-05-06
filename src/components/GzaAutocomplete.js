import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete'; 
import GzaList from './GzaList'; 
import { makeStyles, TextField } from '@material-ui/core';

const GzaAutocomplete = ({
  gza, 
  value, 
  onChange, 
}) => {
  const classes = useStyles();
  const {
    getRootProps, 
    getInputProps, 
    groupedOptions, 
    getOptionProps, 
  } = useAutocomplete({
    options: gza,
    value: value, 
    onChange: (e, v) => onChange(v), 
    getOptionLabel: (option) => {
      if (option.hinnm === undefined) {
        return '';
      }
      return [
        option.hinnm, 
        option.sizen, 
        `${option.yoryo}${option.jurkb}`, 
        `(${option.hincd})`, 
        [
          option.tainm, 
          option.ikunm, 
          option.gennm, 
          option.kaknm, 
        ].join('-')
      ].join(' ');
    }, 
  });

  const gzaOptions = groupedOptions.map((option, index) => {
    return option;
  });

  const optionProps = gzaOptions.length ? getOptionProps(gzaOptions[0]) : null;

  return (
    <div>
      <div {...getRootProps()}>
        <TextField
          inputProps={getInputProps()}
          label="在庫一覧検索"
          fullWidth
        />
        <GzaList 
          gza={gzaOptions}
          optionProps={optionProps}
        />
      </div>
    </div>
  )
}

export default GzaAutocomplete;

const useStyles = makeStyles(theme => ({

}));
