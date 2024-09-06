import { Typography } from '@mui/material'
import React from 'react'

const Title = ({ text, textAlign, color }) => {
  return (
    <Typography 
    variant='h4'
    component='h3'
    sx={{ 
      fontWeight: '400',
      textAlign: textAlign,
        color: {color},
        marginTop: 'auto',
        marginBottom: 'auto'
    }}
    >
      {text}
    </Typography>
  )
}

export default Title