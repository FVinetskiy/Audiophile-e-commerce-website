import {Link} from 'react-router-dom'
import './BasketContent.scss'
import {useAppDispatch} from '../../redux/store'
import {ModalStatus, reverseBool} from '../../redux/slices/modal'
import {useKeyPress} from '../../hooks/useKeyPress'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import {
  CartItemType,
  clearItem,
  decItem,
  incItem,
  stateCart,
} from '../../redux/slices/cart'

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

  const inc = (id: number) => {
    dispatch(incItem(id))
  }

  const dec = (id: number) => {
    dispatch(decItem(id))
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
        {items.map((product: CartItemType) => (
          <li key={product.id} className='product-list__item'>
            <div key={product.id} className='product'>
              <div className='product__wrap-img'>
                <img src={`.${product.src}`} alt={product.name} />
              </div>
              <div className='product__content'>
                <p className='product__name'>{product.name}</p>
                <p className='product__price'>{product.price}</p>
              </div>
            </div>

            <div className='counter'>
              <button
                disabled={product.count === 0}
                onClick={() => dec(Number(product.id))}
                className='counter__button'>
                -
              </button>
              <p className='counter__count'>{product.count}</p>
              <button
                onClick={() => inc(Number(product.id))}
                className='counter__button'>
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className='basket__footer'>
        <p className='basket__total-text'>TOTAL</p>
        <p className='basket__price'>$ {totalPrice}</p>
      </div>
      <Link
        to={'/checkout'}
        onClick={closeModal}
        className={
          items.length === 0 || totalPrice === 0
            ? 'button-checkout disabled'
            : 'button-checkout'
        }>
        checkout
      </Link>
    </div>
  )
}

export default BasketContent
