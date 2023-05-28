import {FC, MouseEventHandler, ReactElement} from 'react'
import './Modal.scss'

type PropsModal = {
  active: boolean
  setActive: MouseEventHandler<HTMLDivElement>
  children: ReactElement
  center?: boolean
}

const Modal: FC<PropsModal> = ({active, setActive, children, center}) => {
  return active ? (
    <div onClick={setActive} className='modal'>
      <div className={center ? 'modal__container center' : 'modal__container'}>
        <div onClick={(e) => e.stopPropagation()} className='modal__content'>
          {children}
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
