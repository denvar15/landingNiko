import { Typography } from '@mui/material'
import React from 'react'

const Title = ({ text, textAlign }) => {
  return (
    <Typography 
    variant='h4'
    component='h3'
    sx={{ 
      fontWeight: '700',
      textAlign: textAlign,
        color: 'white',
        marginTop: 'auto',
        marginBottom: 'auto'
    }}
    >
      {text}
    </Typography>
  )
}

export default Title