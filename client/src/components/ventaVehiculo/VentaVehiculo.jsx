import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import './ventaVehiculo.css';






const VentaVehiculo = () => {
  
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [version, setVersion] = useState('');
  const [año, setAño] = useState('');
  const [tipoVehiculo, setTipoVehiculo] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('null');
 
    // funcion para manejar validacion de datos en el formulario
  const validationSchema = Yup.object().shape({
    marca: Yup.string().required('La marca es requerida'),
    modelo: Yup.string().required('El modelo es requerido'),
    version: Yup.string().required('La versión es requerida'),
    año: Yup.number().required('El año es requerido').integer('El año debe ser un número entero'),
    tipoVehiculo: Yup.string().required('El tipo de vehículo es requerido'),
    precio: Yup.number().required('El precio es requerido').positive('El precio debe ser un número positivo'),
  });

  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await validationSchema.validate({
        marca,
        modelo,
        version,
        año: año,
        tipoVehiculo,
        precio,
      }, { abortEarly: false });
  
      // Si los datos son válidos, continúa con la solicitud POST
      const usuario_id = obtenerUsuarioId();
      const vehiculo = {
        marca,
        modelo,
        version,
        año: año,
        tipoVehiculo,
        precio,
        usuario_id,
        imagen
      };
  
      console.log(vehiculo);
      const response = await axios.post('http://localhost:3001/vehiculo/vehiculo', vehiculo);
  
      
    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        console.log('Errores de validación:', validationErrors);
      } else {
        console.error('Error en la solicitud:', error);
      }
    }
  };
  
  

 
  const obtenerUsuarioId = () => {  
    return 'ID_DEL_USUARIO'; 
  };
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
  };

  return (
    <div className="container-form-venta">
      <h2>Ingresa tu vehículo</h2>
      <form className="form-venta" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="marca"></label>
          <input
            type="text"
            id="marca"
            value={marca}
            placeholder="Marca"
            onChange={(e) => setMarca(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="modelo"></label>
          <input
            type="text"
            id="modelo"
            value={modelo}
            placeholder='Modelo'
            onChange={(e) => setModelo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="version"></label>
          <input
            type="text"
            id="version"
            value={version}
            placeholder='Versión'
            onChange={(e) => setVersion(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="año"></label>
          <input
            type="number"
            id="año"
            value={año}
            placeholder='Año'
            onChange={(e) => setAño(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="tipoVehiculo"></label>
          <input
            type="text"
            id="tipoVehiculo"
            value={tipoVehiculo}
            placeholder='Tipo de vehículo'
            onChange={(e) => setTipoVehiculo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="precio"></label>
          <input
            type="number"
            id="precio"
            value={precio}
            placeholder='Precio'
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imagen"></label>
          <input
            type="file"
            id="imagen"
            accept="image/*" 
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label htmlFor="imagen"></label>
          <input
            type="file"
            id="imagen"
            accept="image/*" 
            onChange={handleImageChange}
          />
        </div>
        <button className="boton-registro" type="submit">Cargar Vehículo</button>
      </form>
    </div>
  );
}
  
export default VentaVehiculo;
