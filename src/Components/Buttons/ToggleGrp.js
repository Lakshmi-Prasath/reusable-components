import React, { useState } from 'react'
import { ToggleButtonGroup } from '@mui/material'
const ToggleGrp = (props) => {
    const classes = 'ToggleGrp ' + props.className
    const [formats, setFormats] = useState([])
    console.log({
        formats
    })
    const handleFormatChange = (_event, updatedFormats) => {
        setFormats(updatedFormats)
    }

    return (
        <div>
            <ToggleButtonGroup
                value={formats}
                onChange={handleFormatChange}
                aria-label='text formatting'
                size='small'
                color='success'
                orientation='vertical'
                exclusive
            >
                {props.children}
            </ToggleButtonGroup>
        </div>
    )
}

export default ToggleGrp