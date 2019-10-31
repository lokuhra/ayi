import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '60%',
    height: '40%',
    justifyContent: 'space-around'
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
      <Typography component="h1" variant="subtitle1">
        ¿Perdiste tu contraseña? Por favor ingrese su nombre de usuario o
        dirección de correo electrónico.
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="fname"
              name="firstName"
              fullWidth
              id="firstName"
              label="Mail"
              autoFocus
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
          Enviar
        </Button>
      </form>
    </div>
  );
}
