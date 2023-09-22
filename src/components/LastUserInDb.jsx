import React from 'react';
import { useState, useEffect } from "react"

export default function LastUserInDb() {

      const [User, setUltimoUser] = useState([])

      useEffect(() => {
            fetch("/api/users/list")
                  .then(respuestaApi=> 
                  respuestaApi.json()
                  )
                  .then(usersApi => {
                  let users = usersApi.data.users
                  let idUsers = users.map((user) => {
                        return user.id
                  })
                  let idMayor = Math.max(...idUsers)
                  let ultimouser = users.find(elemento => elemento.id === idMayor)


                  setUltimoUser(ultimouser)
                  })
      }, [])

      const [Categoria, setCategoria] = useState([])

/*       useEffect(() => {
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
      }, []) */

  return(

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Último usuario registrado</h5>
                  </div>
                  <div className="card-body">
                        <h5 className="m-0 font-weight-bold text-gray-800">{User.name} {User.surname}</h5>
                        <div className="text-center">
                              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={User.avatar} alt={User.name} />
                        </div>
                        <p>{User.email}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View user detail</a>
                  </div>
            </div>
        </div>

  );
}
