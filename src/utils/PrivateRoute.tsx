import React from 'react'

export interface PrivateRoutePropsInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any
  path?: string
}

const PrivateRoute: React.FC<PrivateRoutePropsInterface> = ({ component: RouteComponent }) => (
  <RouteComponent />
)

export default PrivateRoute
