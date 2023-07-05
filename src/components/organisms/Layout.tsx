import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = ({ ...rest }) => (
  <>
    <div className="m-0 w-screen p-0" {...rest}>
      <Outlet />
    </div>
  </>
)

export default memo(Layout)
