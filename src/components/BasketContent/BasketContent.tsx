import './BasketContent.scss'

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
  },
  {
    id: 2,
    src: 'https://ir.ozone.ru/s3/multimedia-t/c1000/6206355161.jpg',
    name: 'XX59',
    price: 2.999,
  },
]

const BasketContent = () => {
  return (
    <div className='basket'>
      <div className='basket__header'>
        <p className='basket__quantity'>cart ({arr.length})</p>
        <button className='basket__remove'>Remove all</button>
      </div>
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
        <p className='basket__price'>$ 5,396</p>
      </div>
      <button className='basket__checkout'>checkout</button>
    </div>
  )
}

export default BasketContent
