import { useState, useEffect } from 'react'
import axios from 'axios';

export const Ofertas = () => {
  const baseURLOfertas = 'http://localhost:8080/api/oferta'
  const baseURLSubastas = 'http://localhost:8080/api/subasta'

  const [ofertas, setOfertas] = useState([]);
  const [subastas, setSubastas] = useState([]);
  
  // Para obtener la mejor oferta
  const [ofertasHelp, setOfertasHelp] = useState([]);
  const [ofertasTemp, setOfertasTemp] = useState([]);
  
  // Datos de la oferta
  const [subastaId, setSubastaId] = useState('');
  const [monto, setMonto] = useState('');
  const [fechaOferta, setFechaOferta] = useState('');
  const [ofertanteId, setOfertanteId] = useState('');

  // Leer los datos
  useEffect(() => {
    // Leer los datos de la subasta
    axios
      .get(baseURLSubastas)
      .then((response) => {
        const datos = response.data.subastas;
        setSubastas(datos);
      })
    // Leer los datos de la oferta
    axios
      .get(baseURLOfertas)
      .then((response) => {
        const datos = response.data.ofertas;
        setOfertas(datos);
        setOfertasHelp(datos);
        setOfertasTemp(datos);
    })
  }, [])

  const crearSubasta = () => {
    axios
      .post(baseURLSubastas)
      .then((response) => {
        const nuevaSubasta = response.data;
        console.log(nuevaSubasta);
        setSubastas([...subastas, nuevaSubasta]);
      })
  }

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

  const obtenerMayorMonto = (idOferta) => {
    let montox = 0;
    ofertasHelp.forEach((ofertax) => {
      if (ofertax.idSubasta == idOferta && ofertax.montoOferta >= montox) {
        montox = ofertax.montoOferta;
      }
    })
    const mejorOferta = ofertasHelp.filter(ofertax => 
      ofertax.idSubasta == idOferta && ofertax.montoOferta == montox
    )
    return mejorOferta
  }

  const borrarFiltros = () => {
    setOfertasHelp(ofertasTemp)
  }
  return (
    <div className="app">
      <section>
        <h2>Subastas</h2>
        <input type="button" value="Crear Subasta" onClick={crearSubasta}></input>
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
              <td>Id Subasta</td>
              <td>Opciones</td>
            </tr>
          </thead>
          <tbody>
            {
              subastas.map((subastax, index) => {
                return (
                  <tr key={index}>
                    <td>{subastax._id}</td>
                    <td>
                      <button
                        itemID={subastax._id}
                        onClick={({target}) => {
                          borrarFiltros()
                          const mejorOferta = obtenerMayorMonto(target.attributes.itemid.value)
                          setOfertasHelp(mejorOferta)
                        }}>
                        Obtener reporte</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
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
            {
              ofertas.map((ofertax, index) => {
                return (
                  <tr key={index}>
                    <td>{ofertax._id}</td>
                    <td>{ofertax.idSubasta}</td>
                    <td>{ofertax.montoOferta}</td>
                    <td>{ofertax.fecha}</td>
                    <td>{ofertax.idOfertante}</td>
                  </tr>
                )  
              })
            }
          </tbody>
        </table>
        {/* Literal 5 */}
        <h2>Oferta de mayor Monto:</h2>
        <table>
          <thead>
            <tr>
              <td>Id Oferta</td>
              <td>Monto</td>
            </tr>
          </thead>
          <tbody>
            {
              ofertasHelp.map((ofertax, index) => {
                return (
                  <tr key={index}>
                    <td>{ofertax._id}</td>
                    <td>{ofertax.montoOferta}</td>
                  </tr>
                )  
              })
            }
          </tbody>
        </table>
      </section>
    </div>
  )
}
