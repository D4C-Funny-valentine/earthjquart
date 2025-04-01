import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <Box sx={{display: "flex", height: '100vh', width: '100%', flexGrow: 1, margin: 0, backgroundColor: "#FFFFF7"}}>
        <Outlet/>
    </Box>
  )
}

export default RootLayout