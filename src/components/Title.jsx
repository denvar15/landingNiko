import { Typography } from '@mui/material'
import React from 'react'

const Title = ({ text, textAlign }) => {
  return (
    <Typography 
    variant='h4'
    component='h3'
    sx={{ 
      fontWeight: '400',
      textAlign: textAlign,
        color: '#5F5F5F',
        marginTop: 'auto',
        marginBottom: 'auto'
    }}
    >
      {text}
    </Typography>
  )
}

export default Title