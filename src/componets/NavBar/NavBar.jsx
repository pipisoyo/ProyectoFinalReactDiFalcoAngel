import React from 'react'
import { CardWidget } from '../CartWidget/CartWidget'
import { CategoryListContainer } from '../CategoryListContainer/CategoryListContainer'

export const NavBar = () => {
  return (
    <nav className="container mt-2 d-flex justify-content-between">
      <CategoryListContainer/>
      <CardWidget/>      
    </nav>
  )
}