import React from 'react';
import { Cards } from './index'

export default function ContentRowMovies({productCount, userCount, productOrder})  {

  return (
    <div className='row'>
      <Cards 
        title = "Cantidad de usuarios"
        quantity = {userCount}
        color = "warning"
        icon = "fa-user" />
      <Cards 
        title = "Cantidad de productos"
        quantity = {productCount}
        color = "primary"
        icon = "fa-shopping-basket" />
      <Cards 
        title = "Productos destacados"
        quantity = {productOrder}
        color = "success"
        icon = "fa-award" />
    </div>
  )


}

