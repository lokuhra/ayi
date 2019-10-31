import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '95%' // Fix IE 11 issue.
  },
  submit: {
    marginTop: '32px'
  }
}));

export default function SignUp() {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <form className={classes.form} noValidate>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="razon"
              name="razon"
              fullWidth
              id="razon"
              label="Razon Social"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="cuit"
              label="Cuit"
              name="cuit"
              autoComplete="cuit"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Registrarse
        </Button>
      </form>
    </div>
  );
}
