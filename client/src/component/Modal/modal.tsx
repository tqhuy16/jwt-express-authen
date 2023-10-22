import { useState, forwardRef, useImperativeHandle } from 'react'
import { Modal as AntdModal } from 'antd'

interface IModalProps {
  children: React.ReactNode
  title?: string
  isConfirm?: boolean
  okText?: string
  cancelText?: string
}

const Modal = forwardRef(
  ({ children, title, isConfirm = false, okText = 'OK', cancelText = 'Close', ...props }: IModalProps, ref: any) => {
    const [open, setOpen] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)

    useImperativeHandle(
      ref,
      () => {
        return {
          showModal: () => setOpen(true)
        }
      },
      []
    )

    const handleOk = () => {
      setConfirmLoading(true)
      setTimeout(() => {
        setOpen(false)
        setConfirmLoading(false)
      }, 2000)
    }

    const handleCancel = () => {
      setOpen(false)
    }

    return !isConfirm ? (
      <AntdModal title={title} open={open} onCancel={handleCancel} footer={null}>
        {children}
      </AntdModal>
    ) : (
      <AntdModal
        title={title}
        open={open}
        confirmLoading={confirmLoading}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={okText}
        cancelText={cancelText}
      >
        {children}
      </AntdModal>
    )
  }
)

export default Modal
