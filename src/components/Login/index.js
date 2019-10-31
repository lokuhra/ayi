import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SignUp from './SignUp';
import LostPassword from './LostPassword';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import clsx from 'clsx';
import Snackbar from '@material-ui/core/Snackbar';
import Loading from '../Loading';
import Router from 'next/router'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(./static/img/backgroundLogo.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  gridRight: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minWidth: '60%',
    boxShadow: '0 0 0 rgba(0, 0, 0, 0.5)'
  },
  paperXs: {
    minWidth: '80%'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    display: 'flex',
    flexDirection: 'column',
    height: '50%',
    justifyContent: 'space-around'
  },
  submit: {
    borderRadius: '22px'
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

function MySnackbarContentWrapper(props) {
  const useStyles1 = makeStyles(theme => ({
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.main
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  }));

  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = ErrorIcon;

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

export default function SignInSide() {
  const classes = useStyles();
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.up('xs'));

  const [openLostPassword, setOpenLostPassword] = useState(false);

  const handleClickOpenLostPassword = () => {
    setOpenLostPassword(true);
  };
  const handleCloseLostPassword = () => {
    setOpenLostPassword(false);
  };

  const [openSignUp, setOpenSignUp] = useState(false);

  const handleClickOpenSignUp = () => {
    setOpenSignUp(true);
  };
  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };

  const [values, setValues] = useState({
    user: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  });

  const [snackBars, setOpenSnackBars] = useState(false);
  const [isOpenLoading, setIsOpenLoading] = useState(false);

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBars(false);
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const DialogTitle = withStyles(styles)(props => {
    const { children, onClose } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.dialogTitle}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles(theme => ({
    root: {
      padding: theme.spacing(2)
    }
  }))(MuiDialogContent);

  const handleSubmit = e => {
    e.preventDefault();
    if (values.user === 'farmalink' && values.password === '123') {
      setIsOpenLoading(true);
      setTimeout(function(){ setIsOpenLoading(false);Router.push('/home') }, 3000)
    } else {
      setOpenSnackBars(true);
      setValues({ ...values, password: '' });
    }
  };

  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={snackBars}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
      >
        <MySnackbarContentWrapper
          onClose={handleCloseSnackBar}
          variant="error"
          message="Verifique la contraseña y/o el usuario."
        />
      </Snackbar>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={6} md={6} className={classes.image} />
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={0}
          square
          className={classes.gridRight}
        >
          <div className={clsx([classes.paper], [isXs && classes.paperXs])}>
            <Typography component="h1" variant="h5">
              Ingresar a mi cuenta
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Usuario"
                name="email"
                autoComplete="email"
                onChange={handleChange('user')}
                autoFocus
              />
              <FormControl>
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                  id="adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordar Contraseña"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={e => handleSubmit(e)}
              >
                Ingresar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    onClick={handleClickOpenLostPassword}
                  >
                    Olvidé mi contraseña
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    onClick={handleClickOpenSignUp}
                  >
                    Crear cuenta
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
      <Dialog
        onClose={handleCloseSignUp}
        aria-labelledby="customized-dialog-title"
        open={openSignUp}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleCloseSignUp}>
          Registro
        </DialogTitle>
        <DialogContent dividers>
          <SignUp />
        </DialogContent>
      </Dialog>
      <Dialog
        onClose={handleCloseSignUp}
        aria-labelledby="customized-dialog-title"
        open={openLostPassword}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleCloseLostPassword}
        >
          Olvide mi contraseña
        </DialogTitle>
        <DialogContent dividers>
          <LostPassword />
        </DialogContent>
      </Dialog>
      <Loading isOpen={isOpenLoading} />
    </Fragment>
  );
}
