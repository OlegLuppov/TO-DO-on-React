// import '@fontsource/roboto/300.css'
// import '@fontsource/roboto/400.css'
// import '@fontsource/roboto/500.css'
// import '@fontsource/roboto/700.css'

import './scss/reset.scss'
import './scss/style.scss'
import './scss/fonts.scss'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'
import { AppTodo } from './components/AppTodo'

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <AppTodo />
  </Provider>
)
