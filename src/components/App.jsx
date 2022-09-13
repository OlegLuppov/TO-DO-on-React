import React from 'react'
import { createRoot } from 'react-dom/client'

const container = document.querySelector('.container')
const root = createRoot(container)
root.render(
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
)
