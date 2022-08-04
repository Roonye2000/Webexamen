import { useState, useEffect } from 'react'
import axios from 'axios';

export const Ofertas = () => {
  // Urls
  const baseURLOfertas = 'http://localhost:8080/api/oferta'
  const baseURLSubastas = 'http://localhost:8080/api/subasta'

  const [ofertas, setOfertas] = useState([]);

  // Datos de la oferta
  const [subastaId, setSubastaId] = useState('');
  const [monto, setMonto] = useState('');
  const [fechaOferta, setFechaOferta] = useState('');
  const [ofertanteId, setOfertanteId] = useState('');

  // Leer los datos
  useEffect(() => {
    // Consultar las ofertas
    axios
      .get(baseURLOfertas)
      .then((response) => {
        const datos = response.data.ofertas;
        setOfertas(datos);
      })
  }, [])

  const crearOferta = () => {
    axios
      .post(baseURLOfertas, {
        idSubasta: subastaId,
        montoOferta: Number(monto),
        fecha: fechaOferta,
        idOfertante: ofertanteId
      })
      .then((response) => {
        const nuevaOferta = response.data;
        console.log(nuevaOferta);
        setOfertas([...ofertas, nuevaOferta]);
      })
  }

  return (
    <div className="app">
      <section>
        <h2>Ofertas</h2>
        <form>
          <input
            type="text"
            placeholder='Id de la Subasta de MongoDB'
            onChange={({target}) => setSubastaId(target.value)}>
          </input>
          <input
            type="text"
            placeholder='Monto de la oferta'
            onChange={({target}) => setMonto(target.value)}>
          </input>
          <input
            type="text"
            placeholder='Fecha de la oferta'
            onChange={({target}) => setFechaOferta(target.value)}>
          </input>
          <input
            type="text"
            placeholder='Id del Ofertante'
            onChange={({target}) => setOfertanteId(target.value)}>
          </input>
          <input type="button" value="Insertar" onClick={crearOferta}></input>
        </form>
      </section>
      <section>
        <h2>Datos</h2>
        <table>
          <thead>
            <tr>
              <td>Id Oferta</td>
              <td>Id Subasta</td>
              <td>Monto</td>
              <td>Fecha</td>
              <td>Id Ofertante</td>
            </tr>
          </thead>
          <tbody>
            {/*
              peticiones.map((peticionx, index) => {
                return (
                  <tr key={index}>
                    <td>{peticionx.id}</td>
                    <td>{peticionx.fecha}</td>
                    <td>{peticionx.idUsuario}</td>
                    <td>{peticionx.asignatura}</td>
                    <td>{peticionx.nota}</td>
                    <td>{peticionx.estado}</td>
                    <td>
                      <input
                        type="button"
                        value="Editar"
                        id="btn_editar"
                        itemID={peticionx.id}
                        onClick={({target}) => leerDatosPeticion(target.attributes.itemid.value)}>
                      </input>
                      <input
                        type="button"
                        value="Eliminar"
                        id="btn_eliminar"
                        itemID={peticionx.id}
                        onClick={({target}) => eliminarPeticion(target.attributes.itemid.value)}>
                      </input>
                    </td>
                  </tr>
                )  
              })
            */}
          </tbody>
        </table>
      </section>
    </div>
  )
}
