import {Link} from 'react-router-dom'
import './OrderModalContent.scss'
import {CheckMark} from '../icons/ChekMark'
import {useSelector} from 'react-redux'
import {stateCart} from '../../redux/slices/cart'

type product = {
  id: number
  src: string
  name: string
  price: number
}

const arr = [
  {
    id: 1,
    src: 'https://ir.ozone.ru/s3/multimedia-t/c1000/6206355161.jpg',
    name: 'XX99 MK II',
    price: 2.999,
    quantity: 1,
  },
  {
    id: 2,
    src: 'https://ir.ozone.ru/s3/multimedia-t/c1000/6206355161.jpg',
    name: 'XX59',
    price: 2.999,
    quantity: 2,
  },
]

const OrderModalContent = () => {
  const {grandPrice} = useSelector(stateCart)

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
          <ul className='product-list'>
            {arr.map((product: product) => (
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
                <p className='product__quantity'>x1</p>
              </li>
            ))}
          </ul>
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
