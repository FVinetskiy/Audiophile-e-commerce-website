import {FC, useEffect, ReactElement} from 'react'
import './Modal.scss'
import {useKeyPress} from '../../hooks/useKeyPress'

type PropsModal = {
  active: boolean
  setActive: (active: boolean) => void
  children: ReactElement
}

const Modal: FC<PropsModal> = ({active, setActive, children}) => {
  const closeModalKeyPress = useKeyPress('Escape')

  useEffect(() => {
    if (active === true) {
      setActive(!closeModalKeyPress)
    }
  }, [active, closeModalKeyPress, setActive])

  return active ? (
    <div onClick={() => setActive(false)} className='modal'>
      <div className='modal__container'>
        <div onClick={(e) => e.stopPropagation()} className='modal__content'>
          {children}
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
