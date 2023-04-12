import React from 'react'
import { Avatar } from '@mui/material'
function MuiAvatar({ avatarData, bgcolor, width, height, src, alt, variant }) {
    return (
        <div>
            <Avatar
                sx={{ bgcolor: bgcolor, width: width, height: height }}
                src={src} alt={alt}
                variant={variant}
            >
                {avatarData}
            </Avatar>
        </div>
    )
}

export default MuiAvatar