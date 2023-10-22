import { Button } from '@/component'

const ButtonsSection = () => {
  return (
    <div className='example-section'>
      <div className='section-title'>Button</div>
      <div className='section-body'>
        <div className='wrap-button'>
          <Button>Normal</Button>
          <Button size='small'>Small</Button>
          <Button rounded>Rounded</Button>
          <Button loading>Loading</Button>
        </div>
      </div>
    </div>
  )
}

export default ButtonsSection
