import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/entrar' element={<SignIn />} />
        <Route path='/registrar' element={<SignUp />} />
        <Route path='/sobre-nos' element={<About />} />
        <Route path='/perfil' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App