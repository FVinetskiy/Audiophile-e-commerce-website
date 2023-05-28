import {FC, useEffect} from 'react'
import Layout from './components/Layout/Layout'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home/Home'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import Detail from './pages/Detail/Detail'
import Checkout from './pages/Checkout/Checkout'

const App: FC = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/headphones' element={<CategoryPage />} />
        <Route path='/speakers' element={<CategoryPage />} />
        <Route path='/earphones' element={<CategoryPage />} />
        <Route path='/product/:id' element={<Detail />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
