import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import React from 'react'

// komponentler gelecek
import NavbarKOmponenti from './components/Navbar'
import Introduction from './components/Introduction'

function App() {


  return (
    <>
  <NavbarKOmponenti/>  
 <Introduction/>
</>
)
}

export default App
