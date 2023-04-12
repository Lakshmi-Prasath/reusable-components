import React from 'react'
import { Button } from '@mui/material'
function MuiButton(
    {
        buttonData,
        variant,
        href,
        color,
        size,
        startIcon,
        endIcon,
        disableRipple,
        disableElevation,
        exclusive,
        orientation,
        value,
        ariaLabel,
    }
) {



    return (
        <>
            <Button
                variant={variant}
                href={href}
                color={color}
                size={size}
                startIcon={startIcon}
                endIcon={endIcon}
                disableElevation={disableElevation}
                disableRipple={disableRipple}
                exclusive={exclusive}
                orientation={orientation}
                value={value}
                aria-label={ariaLabel}

            >
                {buttonData}
            </Button>


        </ >
    )
}

export default MuiButton