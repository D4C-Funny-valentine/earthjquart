import { Box } from '@mui/material'
import React from 'react'

interface PageLayoutProps {
    children: React.ReactNode
}

const PageLayout = ({
    children,
} : PageLayoutProps) => {
  return (
    <Box sx={{width: '100%', px: {xs: 1, sm: 2, md: 3, lg: 4}}}>
        {children}
    </Box>
  )
}

export default PageLayout