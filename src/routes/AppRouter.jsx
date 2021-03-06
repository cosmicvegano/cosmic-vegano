import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import CategoryDetails from '../pages/CategoryDetails'
import ProductDetails from '../pages/ProductDetails'
import ComboDetails from '../pages/ComboDetails'
import Thanks from '../pages/Thanks'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CategoryDetails />} path="/categoria/:show" />
        <Route element={<CategoryDetails />} path="/combos/:show" />
        <Route element={<ProductDetails />} path="/producto/:id" />
        <Route element={<ComboDetails />} path="/combo/:id" />
        <Route element={<Thanks />} path="/veganizado/producto/:showID/:variant" />
        <Route element={<Thanks />} path="/veganizado/combo/:showID" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
