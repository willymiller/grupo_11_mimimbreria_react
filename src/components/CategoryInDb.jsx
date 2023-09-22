import React from 'react';
import { Category } from './index'


export default function CategoryInDb({categories})  {

    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Categorías de Productos</h5>
                  </div>
                  <div className="card-body fondoCaja">
                    <div className="row ">
                      { categories.map( (category, i) => (
                          <Category key = {category + i} name = {category} />
                      ))}
                    </div>
                  </div>
            </div>
        </div>
    )
  

}


