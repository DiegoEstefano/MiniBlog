import styles from './App.module.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className={styles.container}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
        
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
