import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import back from '../../assets/back.svg'
import useItems from '../../hooks/useItems'

import './styles.scss'

const CategoryHeader = ({ categoryToShow }) => {
  const { show } = useParams()
  const { category, getCategoryToShow } = useItems()

  useEffect(() => {
    getCategoryToShow(show)
  }, [getCategoryToShow, show])
  console.log(category)

  categoryToShow == null && (categoryToShow = category)

  return (
    <>
      <section className="category-header">
        <div className="box-category-header">
          <Link className="arrow-btn-link" to="/">
            <img alt="Flecha de volver al inicio" className="arrow-btn" src={back} />
          </Link>
          {categoryToShow && <h1 className="title-category-header">{categoryToShow.nombre}</h1>}
        </div>

        {categoryToShow && (
          <img
            alt={`Imagen de la categoria: ${categoryToShow.nombre} -> ${categoryToShow.img}`}
            className="img-category-header"
            src="https://dummyimage.com/1280x360/663399/1a1a1a.jpg&text=category-cosmic-vegano.jpg"
          />
        )}
      </section>
    </>
  )
}

export default CategoryHeader
