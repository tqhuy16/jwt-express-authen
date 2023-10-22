import { useRef } from 'react'

import { Button, Modal } from '@/component'

const ModalsSection = (): JSX.Element => {
  const confirmBoxRef = useRef<any>()
  const modalRef = useRef<any>()

  return (
    <div className='example-section'>
      <div className='section-title'>Modal</div>
      <div className='section-body'>
        <div className='wrap-button'>
          <Button onClick={() => modalRef.current?.showModal()}>Open Modal</Button>
          <Button onClick={() => confirmBoxRef.current?.showModal()}>Show confirm box</Button>
        </div>
      </div>

      <Modal title='Modal!' ref={modalRef}>
        <p>Hello</p>
      </Modal>

      <Modal title='Confirm!' ref={confirmBoxRef} isConfirm={true}>
        <p>Are you sure to delete a record</p>
      </Modal>
    </div>
  )
}

export default ModalsSection
