import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import useUtilities from '../../hooks/useUtilities'
import useItems from '../../hooks/useItems'
import back from '../../assets/back.svg'
import mp from '../../assets/mp.png'
import time from '../../assets/product/icon-for.svg'
import bake from '../../assets/product/icon-bake.svg'
import keep from '../../assets/product/icon-keep.svg'
import muchef from '../../assets/product/muuchef.png'
import wpp from '../../assets/wapp.png'
import './styles.scss'

const Product = () => {
  const [pack, setPack] = useState(0)
  const { id } = useParams()
  const { getItemToShow, item } = useItems()
  const { formatPrice } = useUtilities()

  useEffect(() => {
    getItemToShow(id, '/producto')
  }, [getItemToShow, id])

  const handleChangeInput = (e) => {
    setPack(e.target.value)
  }

  const wapp = item && `https://wa.me/543625140121?text=Hola%21%20quiero%20consultar%20sobre:%20`

  return item == null ? (
    <h2>Loading</h2>
  ) : (
    <div className="wrapper">
      <div className="container-menu">
        <Link className="arrow-btn-link" to="/">
          <img alt="Flecha de volver al inicio" src={back} />
        </Link>
        <h2>{item.categoria}</h2>
        <h3>{item.nombre}</h3>
      </div>

      <div className="container-desktop">
        <img alt="img-food" className="container-img" src={`/img/${item.img}`} />

        <div className="container-indications">
          <h3>{item.nombre}</h3>
          <div className="box-indication">
            <img alt="bake" src={bake} />
            <p>{item.variantes[pack].rinde}</p>
          </div>
          <div className="box-indication">
            <img alt="time" src={time} />
            <p>{item.coccion}</p>
          </div>
          <div className="box-indication">
            <img alt="keep" src={keep} />
            <p>{item.conservacion}</p>
          </div>
        </div>
      </div>

      <section className="container-ingredients">
        <div className="title-ingredients">
          <img alt="mu-chef" src={muchef} />
          <h2>INGREDIENTES</h2>
        </div>
        <p className="ingredients">{item.ingredientes}</p>
      </section>

      <section className="container-packs">
        <div className="box-packs">
          <div className="pack">
            <label htmlFor="pack">PACK DE 6</label>
            <input
              checked={pack == 0 ? true : false}
              id="pack"
              type="radio"
              value="0"
              onChange={handleChangeInput}
            />
          </div>
          <div className="pack">
            <label htmlFor="pack2">PACK DE 12</label>
            <input
              checked={pack == 1 ? true : false}
              id="pack2"
              type="radio"
              value="1"
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <p>{formatPrice(item.variantes[pack].precio)}</p>
      </section>

      <a
        className="button-buy"
        href={`${item.variantes[pack].link}`}
        rel="noreferrer"
        target="_blank"
      >
        <h3>Comprar</h3>
        <img alt="mp" src={mp} />
      </a>

      <a href={wapp} rel="noreferrer" target="_blank">
        <img alt="whats-app" className="wpp" src={wpp} />
      </a>
    </div>
  )
}

export default Product
