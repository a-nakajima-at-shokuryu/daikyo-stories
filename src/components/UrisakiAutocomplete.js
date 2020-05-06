import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'; 

const UrisakiAutocomplete = ({
  arrayUrisaki2, 
}) => {
  return (
    <Autocomplete
      options={arrayUrisaki2}
      defaultValue={arrayUrisaki2[0]}
      getOptionLabel={(option) => option.AIT_AITCD + " - " + option.AIT_MEISJ}
      style={{ width: 400 }}
      renderInput={(params) =>
        <TextField {...params} label="得意先" />
      }
    />
  );
}

export default UrisakiAutocomplete
