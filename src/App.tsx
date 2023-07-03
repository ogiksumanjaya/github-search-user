import { Suspense, lazy } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/organisms/Layout'
import PrivateRoute from './utils/PrivateRoute'
import NotFound from './pages/NotFound'

const App = () => {
  const Homepage = lazy(() => import('./pages/Homepage'))
  const renderLoader = () => <p>Loading</p>
  return (
    <Suspense fallback={renderLoader()}>
      <Routes>
        <Route path="/" element={<PrivateRoute component={Layout} />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
