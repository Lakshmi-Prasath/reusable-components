import React from 'react'
import { Alert, AlertTitle } from '@mui/material'


function Alerts({
    alertTitle,
    alertData,
    severity,
    icon,
    action,
    variant,
    onClose
}) {
    return (
        <>
            <Alert severity={severity} icon={icon} action={action} variant={variant} onClose={onClose}>
                <AlertTitle>{alertTitle}</AlertTitle>
                {alertData}
            </Alert>

        </>
    )
}

export default Alerts