import {Link} from 'react-router-dom'
import './BasketContent.scss'
import {useAppDispatch} from '../../redux/store'
import {ModalStatus, reverseBool} from '../../redux/slices/modal'
import {useKeyPress} from '../../hooks/useKeyPress'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import {clearItem, stateCart} from '../../redux/slices/cart'

type product = {
  id: number
  src: string
  name: string
  price: number
}

// const arr = [
//   {
//     id: 1,
//     src: 'https://ir.ozone.ru/s3/multimedia-t/c1000/6206355161.jpg',
//     name: 'XX99 MK II',
//     price: 2.999,
//   },
//   {
//     id: 2,
//     src: 'https://ir.ozone.ru/s3/multimedia-t/c1000/6206355161.jpg',
//     name: 'XX59',
//     price: 2.999,
//   },
// ]

const BasketContent = () => {
  const {active} = useSelector(ModalStatus)
  const {items, totalPrice} = useSelector(stateCart)
  const dispatch = useAppDispatch()

  const closeModalKeyPress = useKeyPress('Escape')

  useEffect(() => {
    if (active === true && closeModalKeyPress === true) {
      dispatch(reverseBool(false))
    }
  }, [active, dispatch, closeModalKeyPress])

  const closeModal = () => {
    dispatch(reverseBool(false))
  }

  const clear = () => {
    dispatch(clearItem())
  }

  return (
    <div className='basket'>
      <div className='basket__header'>
        <p className='basket__quantity'>cart ({items.length})</p>
        <button onClick={clear} className='basket__remove'>
          Remove all
        </button>
      </div>
      <ul className='product-list'>
        {items.map((product: product) => (
          <li key={product.id} className='product-list__item'>
            <div key={product.id} className='product'>
              <div className='product__wrap-img'>
                <img src={product.src} alt={product.name} />
              </div>
              <div className='product__content'>
                <p className='product__name'>{product.name}</p>
                <p className='product__price'>{product.price}</p>
              </div>
            </div>

            <div className='counter'>
              <button className='counter__button'>-</button>
              <p className='counter__count'>1</p>
              <button className='counter__button'>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className='basket__footer'>
        <p className='basket__total-text'>TOTAL</p>
        <p className='basket__price'>$ {totalPrice}</p>
      </div>
      <Link to={'/checkout'} onClick={closeModal} className='button-checkout'>
        checkout
      </Link>
    </div>
  )
}

export default BasketContent
