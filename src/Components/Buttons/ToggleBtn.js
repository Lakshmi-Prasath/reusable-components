import React from 'react'
import { ToggleButton } from '@mui/material'

function ToggleBtn({ value, ariaLabel, formatIcon }) {
    return (
        <div>
            <ToggleButton value={value} aria-label={ariaLabel}>{formatIcon}</ToggleButton>
        </div>
    )
}

export default ToggleBtn