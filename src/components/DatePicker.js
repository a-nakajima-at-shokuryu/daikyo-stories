import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ja from 'date-fns/locale/ja';

const DatePicker = ({
  nohinbi, 
  doNohinbiChange, 
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        label="納品日"
        format="yyyy-MM-dd"
        locale={ja}
        value={nohinbi}
        onChange={doNohinbiChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DatePicker
