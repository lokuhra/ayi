import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxTabla = (props) => {
    const TableCheckbox = withStyles({
        root: {
            width: '24px',
            height: '24px',
            color: '#424242',
            padding: '0'
        },
        checked: {
            color: '#0acbc7 !important'
        }
    })(Checkbox);
    return (
        <TableCheckbox style={{ width: '24px', height: '24px', }} />
    );
}

export default CheckboxTabla;