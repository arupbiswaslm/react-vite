import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ParentComponent from './components/ParentComponent.jsx'

function App() {

  return (
    <>
      <div className="card">
        <ParentComponent />
      </div>
    </>
  )
}

export default App
