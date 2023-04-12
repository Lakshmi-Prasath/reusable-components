import { Chip } from '@mui/material'
import { useState } from 'react';

function Chips(
    {
        label,
        color,
        size,
        icon,
        variant,
        avatar,
        onClick,
        onDelete,
        key
    }
) {
    return (
        <>
            <Chip
                label={label}
                color={color}
                size={size}
                icon={icon}
                variant={variant}
                avatar={avatar}
                onClick={onClick}
                onDelete={onDelete}
                key={key}
            />
        </>
    )
}

export default Chips