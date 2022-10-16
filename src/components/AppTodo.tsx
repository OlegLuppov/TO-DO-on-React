import React from 'react'
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom'

import { HeaderTodo } from './HeaderTodo'
import { TodosPage } from '../pages/TodosPage'
import { AboutPage } from '../pages/AboutPage'
import { Home } from '../pages/HomePage'

export const AppTodo: React.FC = () => {
  return (
    <BrowserRouter>
      <HeaderTodo />
      <Routes>
        <Route element={<Home />} path="home" />
        <Route element={<AboutPage />} path="about" />
        <Route element={<TodosPage />} path="todos" />
      </Routes>
    </BrowserRouter>
  )
}
