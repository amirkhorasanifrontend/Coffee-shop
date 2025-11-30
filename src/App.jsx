import React from 'react'
import Topbar from './components/navbar/Navbar'
import { useRoutes } from 'react-router-dom'
import routes from './routes'


function App() {

  const router = useRoutes(routes)

  return (
    <div>
      { router }
    </div>
  )
}

export default App
