import React, { useState } from 'react';
import {
  CssBaseline
} from '@material-ui/core'; 
import DatePicker from './components/DatePicker'; 
import UrisakiAutocompleteByGql from './components/UrisakiAutocompleteByGql'; 
import GzaAutocompleteByGql from './components/GzaAutocompleteByGql'; 


const App = () => {
  // ステートフック
  const [nohinbi, setNohinbi] = useState(new Date())

  // 納品日変更時
  const doNohinbiChange = date => {
    if (date !== null) {
      if (date.toString() !== "Invalid Date") {
        setNohinbi(date)
      }
    }
  }
  return (
    <div>
      <CssBaseline />

      <DatePicker nohinbi={nohinbi} doNohinbiChange={doNohinbiChange} />

      <UrisakiAutocompleteByGql />

      <GzaAutocompleteByGql/>
    </div>
  );
}
export default App;
