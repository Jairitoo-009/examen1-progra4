import { useState } from 'react'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
<RouterProvider router={router} />

    </>
  )
}

export default App
