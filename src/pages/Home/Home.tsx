import {FC} from 'react'
import Bringing from '../../components/Bringing/Bringing'
import MainBanner from '../../components/MainBanner/MainBanner'
import Category from '../../components/Category/Category'
import MainProduct from '../../components/MainProduct/MainProduct'

const Home: FC = () => {
  return (
    <main>
      <MainBanner />
      <div className='container'>
        <Category />
        <MainProduct />
        <Bringing />
      </div>
    </main>
  )
}

export default Home
