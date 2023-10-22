import { message } from 'antd'

import { ToastType } from '@/types/global'

const show = (type: 'success' | 'warning' | 'error', text: string, duration: number) => {
  const className = type === 'error' ? 'ant-custom-error' : type === 'warning' ? 'ant-custom-warning' : ''
  message[type]({
    content: text,
    duration,
    className
  })
}

const toastShow = (data: string, duration: number) => {
  show('success', data, duration)
}

const toastWarning = (data: string, duration: number) => {
  show('warning', data, duration)
}

const toastError = (data: string, duration: number) => {
  show('error', data, duration)
}

const Toast = (type: ToastType, text: string, duration = 5) => {
  let ToastType
  if (type === 'show') ToastType = toastShow(text, duration)
  if (type === 'warning') ToastType = toastWarning(text, duration)
  if (type === 'error') ToastType = toastError(text, duration)
  if (type === 'duration') ToastType = toastShow(text, duration)
  return ToastType
}

export default Toast
