import {FC, useEffect} from 'react'
import './Detail.scss'
import Bringing from '../../components/Bringing/Bringing'
import Category from '../../components/Category/Category'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {useAppDispatch} from '../../redux/store'
import {useSelector} from 'react-redux'
import {fetchProduct, selectProduct} from '../../redux/slices/detailProduct'
import {addItem, decItem, stateCart} from '../../redux/slices/cart'

const Detail: FC = () => {
  const {product} = useSelector(selectProduct)
  const {items} = useSelector(stateCart)
  const galleryObj = product.gallery
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {id} = useParams()

  const currenCountItem = items?.find((i: any) => i.id === Number(product.id))
  const countItemProduct = currenCountItem ? currenCountItem?.count : 0

  const getProduct = async () => {
    dispatch(fetchProduct({id}))
  }

  const addToCart = () => {
    const currentCartItem: any = {
      id: product.id,
      src: product.image?.desktop,
      name: product.name,
      price: product.price,
      count: 0,
    }
    dispatch(addItem(currentCartItem))
  }

  const dec = () => {
    dispatch(decItem(product.id))
  }

  useEffect(() => {
    getProduct()
  }, [id])

  return (
    <main>
      <div className='container'>
        <div className='detail'>
          <button onClick={() => navigate(-1)} className='back'>
            Go Back
          </button>
          <div className='piece'>
            <div className='piece__wrap-img'>
              <img src={`.${product?.image?.desktop}`} alt={product.name} />
            </div>
            <div className='piece__content-text'>
              {product.new ? (
                <span className='category-item__new'>NEW PRODUCT</span>
              ) : null}
              <h1 className='category-item__title'>{product.name}</h1>
              <p className='category-item__description'>
                {product.description}
              </p>
              <p className='piece__price'>{`$ ${product.price}`}</p>
              <div className='piece__wrapper'>
                <div className='counter'>
                  <button
                    disabled={countItemProduct === 0}
                    onClick={dec}
                    className='counter__button'>
                    -
                  </button>
                  <p className='counter__count'>{countItemProduct}</p>
                  <button onClick={addToCart} className='counter__button'>
                    +
                  </button>
                </div>
                <button onClick={addToCart} className='button'>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className='piece__info'>
            <div className='piece__column'>
              <h2 className='piece__text'>FEATURES</h2>
              <p className='piece__features'>{product.features}</p>
            </div>
            <div className='piece__column'>
              <h3 className='piece__text'>in the box</h3>
              <ul className='quantity-list'>
                {product.includes?.map((i, index) => (
                  <li key={index} className='quantity-list__item'>
                    <span className='quantity-list__number'>
                      {i.quantity} x
                    </span>
                    <p className='quantity-list__text'>{i.item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='gallery'>
            {galleryObj
              ? Object.values(galleryObj).map((i, index) => (
                  <div
                    key={index}
                    className={`gallery__wrap-img gallery__wrap-img--${index} `}>
                    <img
                      className='gallery__img'
                      src={`.${i.desktop}`}
                      alt={'product'}
                    />
                  </div>
                ))
              : null}
          </div>

          <div className='like'>
            <h3 className='like__title'>you may also like</h3>
            <div className='like__list'>
              {product.others?.map((i) => (
                <div key={i.id} className='like__item'>
                  <div className='like__wrap-img' key={i.name}>
                    <img
                      className='like__img'
                      src={`.${i.image.desktop}`}
                      alt={i.name}
                    />
                  </div>
                  <p className='like__name'>{i.name}</p>
                  <Link to={`/product/${i.id}`} className='button'>
                    See Product
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <Category />
          <Bringing />
        </div>
      </div>
    </main>
  )
}

export default Detail
