import {FC, useState} from 'react'
import Modal from '../Modals/Modal'
import './Summary.scss'
import OrderModalContent from '../OrderModalContent/OrderModalContent'
import {stateCart} from '../../redux/slices/cart'
import {useSelector} from 'react-redux'

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

type PropsSummary = {
  onSubmit: () => void
  isValid: boolean
}

const Summary: FC<PropsSummary> = ({onSubmit, isValid}) => {
  const {grandPrice, delivery} = useSelector(stateCart)
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
        <div className='summary__wrapper'>
          <p className='summary__text'>
            TOTAL <span>$ {'123'}</span>{' '}
          </p>
          <p className='summary__text'>
            SHIPPING <span>$ {delivery}</span>{' '}
          </p>
          <p className='summary__text'>
            VAT (INCLUDED) <span>$ {'123'}</span>{' '}
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
