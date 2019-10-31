import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Row = ({ children, size, variant = 'subtitle1' }) => (
  <Grid item xs={size}>
    <Typography variant={variant}>{children}</Typography>
  </Grid>
);

export default Row;
