import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MyResume from './pages/MyResume'


function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/resume' element={<MyResume/>} />
  </Routes>
  )
}

export default App