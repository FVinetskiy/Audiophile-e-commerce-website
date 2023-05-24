import './CategoryPage.scss'
import Bringing from '../../components/Bringing/Bringing'
import Category from '../../components/Category/Category'
import {Link, useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import {fetchProduct, selectCategory} from '../../redux/slices/caregory'
import {useAppDispatch} from '../../redux/store'
import {useSelector} from 'react-redux'

const CategoryPage = () => {
  const {categories} = useSelector(selectCategory)
  const dispatch = useAppDispatch()
  const location = useLocation()
  const category = location.pathname.replace('/', '')

  const getCategory = async () => {
    dispatch(fetchProduct({category}))
  }

//   const reverseCategories = [...categories]
//   reverseCategorie.reverse()

//   console.log('categories', categories)
//   console.log('ass', ass)

  useEffect(() => {
    getCategory()
  }, [category])

  return (
    <main>
      <div className='category-head'>
        <h1 className='category-head__title'>{category}</h1>
      </div>
      <div className='container'>
        <div className='category-list'>
          {categories.map((category) => (
            <div key={category.id} className='category-item'>
              <div className='category-item__wrap-img'>
                <img src={category.categoryImage.desktop} alt={category.name} />
              </div>
              <div className='category-item__content'>
                {category.new ? (
                  <span className='category-item__new'>NEW PRODUCT</span>
                ) : null}
                <p className='category-item__title'>{category.name}</p>
                <p className='category-item__description'>
                  {category.description}
                </p>
                <Link className='button' to={`/product/${category.id}`}>
                  See Product
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Category />
        <Bringing />
      </div>
    </main>
  )
}

export default CategoryPage
