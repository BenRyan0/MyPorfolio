import {Routes, Route} from 'react-router-dom'


import { lazy, Suspense } from 'react'

const Home = lazy(() =>import('./pages/Home'))
const MyResume = lazy(() =>import('./pages/MyResume'))


function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
  )
}

export default App