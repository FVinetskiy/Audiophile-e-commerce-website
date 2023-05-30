import {FC, useState} from 'react'
import Modal from '../Modals/Modal'
import './Summary.scss'
import OrderModalContent from '../OrderModalContent/OrderModalContent'
import {CartItemType, stateCart} from '../../redux/slices/cart'
import {useSelector} from 'react-redux'

type PropsSummary = {
  onSubmit: () => void
  isValid: boolean
}

const Summary: FC<PropsSummary> = ({onSubmit, isValid}) => {
  const {grandPrice, delivery, totalPrice, nds, items} = useSelector(stateCart)
  const [active, setActive] = useState(false)

  const openOrderModal = () => {
    setActive(!active)
    onSubmit()
  }

  return (
    <>
      <div className='summary'>
        <p className='summary__title'>summary</p>
        <ul className='product-list'>
          {items.map((product: CartItemType) => (
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
              <p className='product__quantity'>{`x${product.count}`}</p>
            </li>
          ))}
        </ul>
        <div className='summary__wrapper'>
          <p className='summary__text'>
            TOTAL <span>$ {totalPrice}</span>
          </p>
          <p className='summary__text'>
            SHIPPING <span>$ {delivery}</span>
          </p>
          <p className='summary__text'>
            VAT (INCLUDED) <span>$ {nds}</span>
          </p>
        </div>

        <p className='summary__text summary__text--grand'>
          GRAND TOTAL <span>$ {grandPrice}</span>
        </p>
        <button
          disabled={!isValid}
          onClick={openOrderModal}
          className='button-checkout'>
          CONTINUE & PAY
        </button>
      </div>

      <Modal center active={active} setActive={openOrderModal}>
        <OrderModalContent />
      </Modal>
    </>
  )
}

export default Summary
