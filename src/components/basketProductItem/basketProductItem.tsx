import {FC} from 'react'
import './basketProductItem.scss'
import {CartItemType} from '../../redux/slices/cart'

const BasketProductItem: FC<CartItemType> = (aza) => {
  return (
    <li className='product-list__item'>
      <div className='product'>
        <div className='product__wrap-img'>
          <img src={aza.src} alt={aza.name} />
        </div>
        <div className='product__content'>
          <p className='product__name'>{aza.name}</p>
          <p className='product__price'>{aza.price}</p>
        </div>
      </div>
      <p className='product__quantity'>{`x${aza.count}`}</p>
    </li>
  )
}

export default BasketProductItem
