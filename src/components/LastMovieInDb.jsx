import React from 'react';
import { useState, useEffect } from "react"

export default function LastMovieInDb() {

      const [Producto, setUltimoProducto] = useState([])

      useEffect(() => {
            fetch("/api/products/list")
                  .then(respuestaApi=> 
                  respuestaApi.json()
                  )
                  .then(productosApi => {
                  let products = productosApi.data.products
                  let idProductos = products.map((prod) => {
                        return prod.id
                  })
                  let idMayor = Math.max(...idProductos)
                  let ultimoproducto = products.find(elemento => elemento.id === idMayor)


                  setUltimoProducto(ultimoproducto)
                  })
      }, [])

      const [Categoria, setCategoria] = useState([])

      useEffect(() => {
            fetch("/api/products/list")
                  .then(respuestaApi=> 
                  respuestaApi.json()
                  )
                  .then(productosApi => {
                  let products = productosApi.data.products
                  let idProductos = products.map((prod) => {
                        return prod.id
                  })
                  let idMayor = Math.max(...idProductos)
                  let ultimoproducto = products.find(elemento => elemento.id === idMayor)
                  let categoria = ultimoproducto.category
                  setCategoria(categoria)
                  })
      }, [])

  return(

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Último producto cargado</h5>
                  </div>
                  <div className="card-body">
                        <h5 className="m-0 font-weight-bold text-gray-800">{Producto.product}</h5>
                        <div className="text-center">
                              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={Producto.image} alt={Producto.product} />
                        </div>
                        <p>{Producto.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                  </div>
            </div>
        </div>

  );
}
