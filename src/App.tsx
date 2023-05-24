import {FC} from 'react'
import Layout from './components/Layout/Layout'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import Detail from './pages/Detail/Detail'

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/headphones' element={<CategoryPage />} />
        <Route path='/speakers' element={<CategoryPage />} />
        <Route path='/earphones' element={<CategoryPage />} />
        <Route path='/product/:id' element={<Detail />} />
      </Route>
    </Routes>
  )
}

export default App
