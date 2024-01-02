import styles from './App.module.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'
import { onAuthStateChanged } from "firebase/auth";
// Context
import { AuthProvider } from './context/AuthContext'


//Pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import DashBoard from './pages/DashBoard/DashBoard'
import CreatePost from './pages/CreatePost/CreatePost'

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication();

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }


  return (
    <div>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <div className={styles.container}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/posts/create' element={<CreatePost />} />
              <Route path='/dashboard' element={<DashBoard />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
