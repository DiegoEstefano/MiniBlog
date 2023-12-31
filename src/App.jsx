import styles from './App.module.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className={styles.container}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
