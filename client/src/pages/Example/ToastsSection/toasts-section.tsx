import { Toast, Button } from '@/component'
import { ToastType } from '@/types/global'

const ToastsSection = () => {
  const handleShowToast = (toastType: ToastType, text: string, duration?: number) => {
    Toast(toastType, text, duration)
  }

  return (
    <div className='example-section'>
      <div className='section-title'>Toasts</div>
      <div className='section-body'>
        <div className='wrap-button'>
          <Button onClick={() => handleShowToast('show', 'This is a toast')}>Show</Button>
          <Button onClick={() => handleShowToast('warning', 'This is a warning toast')}>Warning</Button>
          <Button onClick={() => handleShowToast('error', 'This is a error toast')}>Error</Button>
          <Button onClick={() => handleShowToast('duration', 'This toast will show during 10 seconds', 10)}>
            Custom dutation 10s
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ToastsSection
