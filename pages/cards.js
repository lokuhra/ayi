import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(3),
    margin: 'auto',
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center'
  }
}));

function App() {
  const classes = useStyles();

  const MyCard = ({ type }) => {
    let title = type === 'pesos' ? 'Saldo en pesos' : 'Saldo en Farmacoins';
    return (
      <Grid item xs={4}>
        <Card>
          <CardHeader
            avatar={
              <Icon classes={{ root: classes.iconRoot }}>
                <img
                  className={classes.imageIcon}
                  src="/static/icons/farmacoin_green.svg"
                />
              </Icon>
            }
            title={title}
          />
          <CardContent>asd</CardContent>
          <CardActions>asd2</CardActions>
        </Card>
      </Grid>
    );
  };
  return (
    <Grid container spacing={3}>
      <MyCard title={'Saldo en Pesos'} />
    </Grid>
  );
}

export default App;
