import { useState, useEffect } from 'react'
import axios from 'axios';

export const Peticiones = () => {
  const baseURL = 'http://localhost:8080/api/peticion'
  const [peticiones, setPeticiones] = useState([]);
  const [peticionesHelp, setPeticionesHelp] = useState([]);

  // Datos de la petición
  const [idPeticion, setIdPeticion] = useState('');
  const [fechaPeticion, setFechaPeticion] = useState('');
  const [usuarioPeticion, setUsuarioPeticion] = useState('');
  const [asignaturaPeticion, setAsignaturaPeticion] = useState('');
  const [notaPeticion, setNotaPeticion] = useState('');
  const [estadoPeticion, setEstadoPeticion] = useState(1);
  
  // Datos para el filtrado
  const [idFiltro, setIdFiltro] = useState('');
  const [estadoFiltro, setEstadoFiltro] = useState(1);

  // Leer los datos
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        const datos = response.data.peticiones;
        setPeticiones(datos);
        setPeticionesHelp(datos);
      })
  }, [])

  const crearPeticion = () => {
    axios
      .post(baseURL, {
        id: idPeticion,
        fecha: fechaPeticion,
        idUsuario: usuarioPeticion,
        asignatura: asignaturaPeticion,
        nota: notaPeticion,
        estado: estadoPeticion
      })
      .then((response) => {
        const nuevaPeticicon = response.data;
        console.log(nuevaPeticicon);
        setPeticiones([...peticiones, nuevaPeticicon]);
      })
      .catch(({response}) => {
        const errores = response.data.errors;
        let msgAlerta = '';
        errores.map((err) => {
          msgAlerta += `${err.msg}\n`
        })
        alert(msgAlerta);
      })
  }

  const editarPeticion = () => {
    if (idPeticion == '') {
      alert('Ingrese un id para editar')
    } else {
      axios
        .put(`${baseURL}/${idPeticion}`, {
          id: idPeticion,
          fecha: fechaPeticion,
          idUsuario: usuarioPeticion,
          asignatura: asignaturaPeticion,
          nota: notaPeticion,
          estado: estadoPeticion
        })
        .then((response) => {
          const peticiconActualizada = response.data;
          console.log(peticiconActualizada)
          const peticionesTemp = peticiones.filter(peticionx => peticionx.id != idPeticion)
          peticionesTemp.push(peticiconActualizada)
          setPeticiones(peticionesTemp)
        })
    }
  }

  const leerDatosPeticion = (id) => {
    // Inputs
    const identificador = document.getElementById('id')
    const fecha = document.getElementById('fecha')
    const idUsuario = document.getElementById('idUsuario')
    const asignatura = document.getElementById('asignatura')
    const nota = document.getElementById('nota')
    const estado = document.getElementById('estado')

    axios
      .get(`${baseURL}/${id}`)
      .then((response) => {
        const peticiconInfo = response.data;
        // Llenar los datos del input
        identificador.value = peticiconInfo.id
        fecha.value = peticiconInfo.fecha
        idUsuario.value = peticiconInfo.idUsuario
        asignatura.value = peticiconInfo.asignatura
        nota.value = peticiconInfo.nota
        estado.value = peticiconInfo.estado
        // Cambiar los valores de la petición
        setIdPeticion(peticiconInfo.id)
        setFechaPeticion(peticiconInfo.fecha)
        setUsuarioPeticion(peticiconInfo.idUsuario)
        setAsignaturaPeticion(peticiconInfo.asignatura)
        setNotaPeticion(peticiconInfo.nota)
        setEstadoPeticion(peticiconInfo.estado)
      })
  }

  const eliminarPeticion = (id) => {
    axios
      .delete(`${baseURL}/${id}`)
      .then((response) => {
        const nuevasPeticiones = peticiones.filter(peticionx => peticionx.id != id)
        setPeticiones(nuevasPeticiones)
      })
  }

  const filtrarDatos = () => {
    let resultado = [];
    if (idFiltro.trim() == '') {
      resultado = peticiones.filter(peticionx => peticionx.estado == estadoFiltro);
    } else {
      resultado = peticiones.filter(peticionx =>
        peticionx.id == idFiltro.toString() && peticionx.estado == estadoFiltro
      );
    }
    setPeticiones(resultado)
  }

  const borrarFiltros = () => {
    setPeticiones(peticionesHelp);
  }

  return (
    <div className="app">
      <section>
        <h2>Peticiones</h2>
        <form>
          <input
            type="text"
            id='id'
            placeholder='Id de la Petición'
            onChange={({target}) => setIdPeticion(target.value)}>
          </input>
          <input
            type="text"
            id='fecha'
            placeholder='Fecha'
            onChange={({target}) => setFechaPeticion(target.value)}>
          </input>
          <input
            type="text"
            id='idUsuario'
            placeholder='Id del Usuario'
            onChange={({target}) => setUsuarioPeticion(target.value)}>
          </input>
          <input
            type="text"
            id='asignatura'
            placeholder='Asignatura'
            onChange={({target}) => setAsignaturaPeticion(target.value)}>
          </input>
          <input
            type="text"
            id='nota'
            placeholder='Nota'
            onChange={({target}) => setNotaPeticion(target.value)}>
          </input>
          <select
            id='estado'
            defaultValue="1"
            onChange={({target}) => setEstadoPeticion(target.value)}>
            <option disabled>Estado</option>
            <option value="1">Pendiente</option>
            <option value="2">Aceptado</option>
            <option value="3">Rechazado</option>
            <option value="4">Exonerado</option>
          </select>
          <input type="button" value="Insertar" onClick={crearPeticion}></input>
          <input type="button" value="Confirmar Edición" onClick={editarPeticion}></input>
        </form>
        <form>
          <h2>Filtros</h2>
          <input
            type="text"
            id='idFiltro'
            placeholder='Id de la Petición'
            onChange={({target}) => setIdFiltro(target.value)}>
          </input>
          <select
            id='estadoFiltro'
            defaultValue="1"
            onChange={({target}) => setEstadoFiltro(target.value)}>
            <option disabled>Estado</option>
            <option value="1">Pendiente</option>
            <option value="2">Aceptado</option>
            <option value="3">Rechazado</option>
            <option value="4">Exonerado</option>
          </select>
          <input type="button" value="Filtrar" onClick={filtrarDatos}></input>
        </form>
      </section>
      <section>
        <h2>Datos</h2>
        <button onClick={borrarFiltros}>Borrar filtros</button>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Fecha</td>
              <td>Id Usuario</td>
              <td>Asignatura</td>
              <td>Nota</td>
              <td>Estado</td>
              <td>Opciones</td>
            </tr>
          </thead>
          <tbody>
            {
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
            }
          </tbody>
        </table>
      </section>
    </div>
  )
}
