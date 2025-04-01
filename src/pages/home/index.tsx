import React from 'react'
import { Outlet } from 'react-router-dom'
import PageLayout from '../../layout/layout'

const HomePage = () => {
  return (
    <PageLayout>
        <Outlet/>
    </PageLayout>
  )
}

export default HomePage