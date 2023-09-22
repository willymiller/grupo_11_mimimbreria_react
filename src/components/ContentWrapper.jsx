import React from 'react';
import { TopBar, ContentRowTop, Footer, MoviesTable } from './index'

export default function ContentWrapper({userInfo, productInfo}) {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
              <TopBar />
              <ContentRowTop categories = {Object.keys(productInfo.countByCategory)} productCount = {productInfo.count} userCount = {userInfo.count} productOrder = {productInfo.countByOrder}/>
              <MoviesTable data = {productInfo.products} 
                           header = {['id', 'product', 'description', 'detail', 'category']}
                           title = 'Listado de Productos'/>
              <MoviesTable data = {userInfo.users} 
                           header = {['id', 'name', 'email', 'detail']}
                           title = 'Listado de Usuarios'/>
        </div>
              <Footer /> 
    </div>
  );
}