import { useState } from 'react'

import { decrement, increment, incrementByAmount, incrementAsync } from '@/redux/reducers/counter.reducer'
import { selectCount } from '@/redux/selectors/counter'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Container, PageContent } from '@/component'
import styles from './redux.module.scss'

const Redux = () => {
  const [incrementAmount, setIncrementAmount] = useState('2')
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  return (
    <PageContent>
      <Container>
        <div>
          <div className={styles.row}>
            <button className={styles.button} aria-label='Decrement value' onClick={() => dispatch(decrement())}>
              -
            </button>
            <span className={styles.value}>{count}</span>
            <button className={styles.button} aria-label='Increment value' onClick={() => dispatch(increment())}>
              +
            </button>
          </div>
          <div className={styles.row}>
            <input
              className={styles.textbox}
              aria-label='Set increment amount'
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <button className={styles.button} onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
              Add Amount
            </button>
            <button
              className={styles.asyncButton}
              onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
            >
              Add Async
            </button>
          </div>
        </div>
      </Container>
    </PageContent>
  )
}

export default Redux
