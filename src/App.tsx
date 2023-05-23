import {FC} from 'react'
import Layout from './components/Layout/Layout'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
