import {useNavigate} from 'react-router-dom'
import './Checkout.scss'
import Summary from '../../components/Summary/Summary'
import {useForm, SubmitHandler} from 'react-hook-form'
import {Card} from '../../components/icons/Card'
import {useRef} from 'react'

type Inputs = {
  name: string
  email: string
  phone: string
  address: string
  radio: string
  zip: string
  city: string
  country: string
  eMoneyNumber: string
  eMoneyPIN: string
}

const Checkout = () => {
  const form = useForm<Inputs>({
    defaultValues: {
      radio: 'e-Money',
    },
    mode: 'onBlur',
  })
  const {
    register,
    watch,
    handleSubmit,
    reset,

    formState: {isValid, errors},
  } = form
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    reset()
  }
  const navigate = useNavigate()
  const watchShow = watch('radio')
  const formRef = useRef<HTMLFormElement>(null)

  const formRefSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit()
    }
  }

  return (
    <div className='checkout'>
      <div className='container'>
        <button onClick={() => navigate(-1)} className='back'>
          Go Back
        </button>
        <div className='checkout__content'>
          <form
            ref={formRef}
            className='form'
            onSubmit={handleSubmit(onSubmit)}>
            <h1 className='form__title'>CHECKOUT</h1>

            <div className='form__item'>
              <p className='form__text'>Billing Details</p>
              <div className='form__wrapper'>
                <div className='form__wrap-input'>
                  <p
                    className={
                      errors.name ? 'form__sub-name error' : 'form__sub-name'
                    }>
                    Name
                    {errors.name && <span>{errors.name.message}</span>}
                  </p>

                  <input
                    className={
                      errors.name ? 'form__input error' : 'form__input'
                    }
                    placeholder='Alexei Ward'
                    {...register('name', {
                      required: true,
                      pattern: {
                        value: /^[a-z]+$/i,
                        message: 'Wrong format',
                      },
                    })}
                  />
                </div>
                <div className='form__wrap-input'>
                  <p
                    className={
                      errors.email ? 'form__sub-name error' : 'form__sub-name'
                    }>
                    Email Address
                    {errors.email && <span>{errors.email.message}</span>}
                  </p>
                  <input
                    className={
                      errors.email ? 'form__input error' : 'form__input'
                    }
                    placeholder='alexei@mail.com'
                    {...register('email', {
                      required: true,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Wrong format',
                      },
                    })}
                  />
                </div>
                <div className='form__wrap-input'>
                  <p className='form__sub-name'>Phone Number</p>
                  <input
                    className='form__input'
                    placeholder='+1 202-555-0136'
                    {...register('phone')}
                  />
                </div>
              </div>
            </div>

            <div className='form__item'>
              <p className='form__text'>shipping info</p>
              <div className='form__wrapper form__wrapper--shipping'>
                <div className='form__wrap-input form__wrap-input--fool'>
                  <p className='form__sub-name'>Address</p>
                  <input
                    className='form__input'
                    placeholder='1137 Williams Avenue'
                    {...register('address')}
                  />
                </div>

                <div className='form__wrap-input'>
                  <p className='form__sub-name'>ZIP Code</p>
                  <input
                    className='form__input'
                    placeholder='10001'
                    {...register('zip')}
                  />
                </div>

                <div className='form__wrap-input'>
                  <p className='form__sub-name'>City</p>
                  <input
                    className='form__input'
                    placeholder='New York'
                    {...register('city')}
                  />
                </div>

                <div className='form__wrap-input'>
                  <p className='form__sub-name'>Country</p>
                  <input
                    className='form__input'
                    placeholder='United States'
                    {...register('country')}
                  />
                </div>
              </div>
            </div>
            <div className='form__item'>
              <p className='form__text'>payment details</p>
              <div className='form__wrapper'>
                <div className='form__wrap-radio'>
                  <p className='form__footer-title'>Payment Method</p>
                </div>
                <div className='form__wrap-radio'>
                  <article className='card'>
                    <input
                      {...register('radio')}
                      type='radio'
                      value={'e-Money'}
                    />
                    <span className='checkmark'></span>
                    <span className='price'>e-Money</span>
                    <section className='decoration-card'></section>
                  </article>
                </div>
                <div className='form__wrap-radio form__wrap-radio--right'>
                  <article className='card '>
                    <input
                      {...register('radio')}
                      type='radio'
                      value={'Cash on Delivery'}
                    />
                    <span className='checkmark'></span>
                    <span className='price'>Cash on Delivery</span>
                    <section className='decoration-card'></section>
                  </article>
                </div>
              </div>
            </div>

            {watchShow === 'Cash on Delivery' ? (
              <div className='form__description'>
                <Card />
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            ) : (
              <div className='form__show'>
                <div className='form__wrap-input'>
                  <p className='form__sub-name'>e-Money Number</p>
                  <input
                    className='form__input'
                    placeholder='238521993'
                    {...register('eMoneyNumber')}
                  />
                </div>
                <div className='form__wrap-input'>
                  <p className='form__sub-name'>e-Money PIN</p>
                  <input
                    className='form__input'
                    placeholder='6891'
                    {...register('eMoneyPIN')}
                  />
                </div>
              </div>
            )}
          </form>
          <Summary isValid={isValid} onSubmit={formRefSubmit} />
        </div>
      </div>
    </div>
  )
}

export default Checkout
