import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'; 

const UrisakiAutocomplete = ({
  arrayUrisaki2, 
  value, 
  onChange, 
}) => {
  return (
    <Autocomplete
      options={arrayUrisaki2}
      defaultValue={arrayUrisaki2[0]}
      getOptionLabel={(option) => {
        if (option.AIT_AITCD === undefined) {
          return '';
        }
        return option.AIT_AITCD + " - " + option.AIT_MEISJ
      }}
      style={{ width: 400 }}
      renderInput={(params) =>
        <TextField {...params} label="得意先" />
      }
      value={value}
      onChange={(e, v) => onChange(v)}
    />
  );
}

export default UrisakiAutocomplete
