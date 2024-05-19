import './App.css'
import TrippyScroll from './components/Scroll/Scroll'
import Landing from './components/Landing/Landing'
import NavbarMenu from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      {/* <NavbarMenu /> */}
      <Landing />
      <TrippyScroll />
      <Services />
      <Contact />
    </>
  )
}

export default App
