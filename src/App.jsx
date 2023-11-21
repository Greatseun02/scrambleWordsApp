import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './containers/HomePage'
import Scramble from './containers/Scramble'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scramble" element={<Scramble />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
