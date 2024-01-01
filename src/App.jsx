import styles from './App.module.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'
import { onAuthStateChanged } from 'firebase/auth';
// Context
import { AuthProvider } from './context/AuthContext'


//Pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {

 
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication();

  const loadingUser = user === undefined

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      // Desinscreva-se do listener quando o componente for desmontado
      unsubscribe();
    };
  }, [auth]); // Adicione auth como dependência, pois está sendo usado dentro do useEffect

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <AuthProvider value={{user}}>
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
      </AuthProvider>
    </div>
  )
}

export default App
