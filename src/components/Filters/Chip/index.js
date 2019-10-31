import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import CachedIcon from '@material-ui/icons/Cached';

const MyChip = ({ paid }) => {
  const paid_label = paid ? 'Finalizado' : 'Pendiente';
  const icon = paid ? <DoneIcon /> : <CachedIcon />;
  const color = paid ? "primary" : "secondary";
  return <Chip color={color} icon={icon} label={paid_label} />;
};

export default MyChip;
