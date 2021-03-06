import React, { useState } from 'react';
import {
  CssBaseline, Grid, Paper, useTheme, Container
} from '@material-ui/core'; 
import DatePicker from './components/DatePicker'; 
import UrisakiAutocompleteByGql from './components/UrisakiAutocompleteByGql'; 
import GzaAutocompleteByGql from './components/GzaAutocompleteByGql'; 
import { appValidationSchema } from './validations/appValidateions';
import { Formik, Form, Field } from 'formik';

const App = () => {
  return (
    <Formik 
      initialValues={{
        nohinb: new Date(), 
        urisaki: {}, 
        zaiko: {}, 
      }}
      validationSchema={appValidationSchema}
    >
      {(props) => (
        <AppForm {...props} />
      )}
    </Formik>
  );
};
const AppForm = ({
  values, 
  errors, 
  touched, 
}) => {
  // ステートフック
  const [nohinbi, setNohinbi] = useState(new Date())
  const [urisaki, setUrisaki] = useState({});
  const [zaiko, setZaiko] = useState({});

  // 納品日変更時
  const doNohinbiChange = date => {
    if (date !== null) {
      if (date.toString() !== "Invalid Date") {
        setNohinbi(date)
      }
    }
  }
  const theme = useTheme();
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <pre>{JSON.stringify({ values, errors, touched, }, null, 2)}</pre>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper style={{ padding: theme.spacing(3) }}>

              <DatePicker 
                nohinbi={nohinbi} 
                doNohinbiChange={doNohinbiChange} 
              />

              <UrisakiAutocompleteByGql 
                value={urisaki}
                onChange={setUrisaki}
              />

              <GzaAutocompleteByGql
                value={zaiko}
                onChange={setZaiko}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}
export default App;
