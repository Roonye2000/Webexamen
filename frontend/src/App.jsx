import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Ofertas } from './Ofertas'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Ofertas />}></Route>
      </Routes>
    </Router>
  )
}

export default App
