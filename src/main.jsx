import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Error } from './pages/Error'
import { PasswordGenerate } from './pages/PasswordGenerate'
import { StyledApplication } from './globalStyles'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PasswordGenerate/>,
    errorElement: <Error/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledApplication/>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
