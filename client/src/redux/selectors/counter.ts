import { RootState } from '@/redux/hooks'

const selectCount = (state: RootState) => state.counter.value

export { selectCount }
