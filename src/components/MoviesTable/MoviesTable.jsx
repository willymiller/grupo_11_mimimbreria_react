import React from 'react'
import './moviesTable.css'
import { MoviesTableRows, MoviesTableGridHeaderFooter } from '../index'

export default function MoviesTable({data, header, title}) {
  return (
          <div className='containerMoviesTable'>
            <div className='moviesTableContainer'>
              <h5 className="m-0 font-weight-bold text-gray-800">{title}</h5>
              <MoviesTableGridHeaderFooter  header = {header} />

              <MoviesTableRows data = {data} header = {header}/>
    
              <MoviesTableGridHeaderFooter  header = {header}/>
            </div>
          </div>

  );
}

