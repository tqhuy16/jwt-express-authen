import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '@/redux/reducers/counter.reducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
