import React from 'react'
import { ButtonGroup } from '@mui/material'
const BtnGroup = (props) => {
    const classes = 'BtnGroup ' + props.className;
    return (
        <div>
            <ButtonGroup aria-label='alignment button group' variant='outlined' orientation='vertical' size='small' color='secondary'>
                {props.children}
            </ButtonGroup>
        </div>
    )
}

export default BtnGroup