import {Link} from 'react-router-dom'
import './OrderModalContent.scss'
import {CheckMark} from '../icons/ChekMark'
import {useSelector} from 'react-redux'
import {stateCart} from '../../redux/slices/cart'
import {useState} from 'react'
import BasketProductItem from '../basketProductItem/basketProductItem'

const OrderModalContent = () => {
  const {grandPrice, items} = useSelector(stateCart)
  const [less, setLess] = useState(true)

  const showLess = () => {
    setLess(!less)
  }

  return (
    <div className='order'>
      <CheckMark className='order__icon' />
      <p className='order__title'>
        THANK YOU <br /> FOR YOUR ORDER
      </p>
      <p className='order__description'>
        You will receive an email confirmation shortly.
      </p>
      <div className='order-info'>
        <div className='order-info__main'>
          <ul className='product-list'></ul>

          {less && <BasketProductItem {...items[0]} />}

          {less === false && items.length > 0
            ? items.map((product) => (
                <BasketProductItem key={product.id} {...product} />
              ))
            : null}

          <button
            disabled={items.length === 1}
            onClick={showLess}
            className='order-info__less'>
            {less ? `and ${items.length - 1} other item(s)` : 'View less'}
          </button>
        </div>
        <div className='order-info__total'>
          <p className='order-info__text'>GRAND TOTAL</p>
          <p className='order-info__price'>$ {grandPrice}</p>
        </div>
      </div>
      <Link to={'/'} className='button-checkout'>
        BACK TO HOME
      </Link>
    </div>
  )
}

export default OrderModalContent
