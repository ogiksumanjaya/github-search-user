import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = ({ ...rest }) => (
  <>
    <Sidebar />
    <div {...rest}>
      <Outlet />
    </div>
  </>
)

export default memo(Layout)
