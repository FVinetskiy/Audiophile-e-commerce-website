import {FC} from 'react'
import './Category.scss'
import {Link} from 'react-router-dom'
import {Arrow} from '../icons/Arrow'

type TypeCategory = {
  id: number
  name: string
  path: string
  src: string
}

const categories = [
  {
    id: 1,
    name: 'HEADPHONES',
    path: '/headphones',
    src: 'headphones',
  },
  {
    id: 2,
    name: 'SPEAKERS',
    path: '/speakers',
    src: 'speakers',
  },
  {
    id: 3,
    name: 'EARPHONES',
    path: '/earphones',
    src: 'earphones',
  },
]

const Category: FC = () => {
  return (
    <ul className='category'>
      {categories.map((category: TypeCategory) => (
        <li key={category.id} className='category__item'>
          <Link className='category__link' to={`${category.path}`}>
            <img
              className='category__img'
              src={`/images/${category.src}.png`}
              alt={category.name}
            />
            <p className='category__text'>{category.name}</p>
            <p className='category__shop'>
              Shop
              <Arrow />
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Category
