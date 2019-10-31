import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { isWidthUp } from '@material-ui/core/withWidth';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ReactSVG from 'react-svg'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Fab from '@material-ui/core/Fab';

const styles = ({ spacing, transitions, breakpoints, palette, shape }) => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: 'relative',
    marginRight: 8,
    borderRadius: shape.borderRadius,
    background: palette.grey[200],
    '&:hover': {
      background: palette.grey[300]
    },
    marginLeft: 0,
    width: '100%',
    [breakpoints.up('sm')]: {
      marginLeft: spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    borderRadius: 4,
    paddingTop: spacing(1),
    paddingRight: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(10),
    transition: transitions.create('width'),
    width: '100%',
    [breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  },
  subtitleMargin:{
    marginLeft:'15px'
  },
  SvgIconTitle:{
    marginLeft:'38px'
  },
  SvgIconTitle2:{
    marginRight:'10px'
  },
  FabMarginRight:{
    marginLeft:'15px',
    marginRight:'38px'
  }
});

const HeaderEx = ({ classes, screen }) => (
  <Fragment>
    <ReactSVG className={classes.SvgIconTitle} src="/static/img/Farmapago.svg" />
    <Typography className={classes.subtitleMargin} variant={"subtitle2"}>Back Office Intranet</Typography>
    <div className={classes.grow} />
    {screen === 'xs' && (
      <IconButton>
        <Icon>more_vert</Icon>
      </IconButton>
    )}
    {isWidthUp('md', screen) && (
      <Fragment>
        <NotificationsNoneIcon />
        <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            className={classes.FabMarginRight}
        >
          <ReactSVG className={classes.SvgIconTitle2} src="/static/img/avatar_farmalink.svg" />
          Farmalink
        </Fab>
      </Fragment>
    )}
  </Fragment>
);

HeaderEx.defaultProps = {
  screen: null
};

export default withStyles(styles)(HeaderEx);
