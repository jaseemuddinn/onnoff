import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrippyScroll from './components/Scroll/Scroll'
import Landing from './components/Landing/Landing'
import NavbarMenu from './components/Navbar/Navbar'
import Services from './components/Services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavbarMenu /> */}
      <Landing />
      <TrippyScroll />
      <Services />
    </>
  )
}

export default App
