import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import NotFoundError from './pages/NotFoundError'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='*' element={<NotFoundError />}></Route>
      </Routes>
    </>
  )
}

export default App
