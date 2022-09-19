import './scss/reset.scss'
import './scss/style.scss'
import './scss/fonts.scss'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'
import ToDoItem from './components/todosItem.jsx'

const container = document.querySelector('.container')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <ToDoItem />
  </Provider>
)
