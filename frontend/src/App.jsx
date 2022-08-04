import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Peticiones } from './Peticiones'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Peticiones />}></Route>
      </Routes>
    </Router>
  )
}

export default App
