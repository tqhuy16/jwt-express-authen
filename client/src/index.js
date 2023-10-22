import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import RoutesComponent from '@/app/router'
import { store } from '@/redux/store'
import '@/assets/styles/main.scss'

function App() {
  return <RoutesComponent />
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
