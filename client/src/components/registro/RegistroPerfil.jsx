import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

import './registro.css';
import Title from '../login/Title';




const RegistroPerfil = () => {
    const navigate = useNavigate();
  const initialValues = {
    nombre: '',
    apellido: '',
    telefono: '',
    provinciaNombre:'',
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .required('El Nombre es obligatorio'),
    apellido: Yup.string()
      .required('El Apellido es obligatorio'),
    telefono: Yup.string()
      .required('Confirma tu contraseña'),
    provinciaNombre: Yup.string()
      .required('La Provincia es obligatoria'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:3001/perfil', values);
    
      if (response.status === 201) {
        if (response.data.message) {
          console.error('Error en el registro:', response.data.message);
        } else {
              alert(`Usuario ${values.nombre} creado correctamente`);
              console.log('Registro de Perfil Exitoso');
              navigate('/usuario');
          }
      } else if (response.status === 400) {
        alert('El Perfil de Usuario ya Existe');
      } else {
        console.error('Error en el registro:', response.data);
      }
    } catch (error) {
      console.error('Error en el registro:', error.response.data);
    } finally {
      setSubmitting(false);
    }
    
  }
  return (
    <div className="contenedor-registro">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="contenedor-form-registro">
          <Title text="Registro de Perfil" />
          <div className="contenedor-input-registro">
            <label htmlFor="nombre"></label>
            <Field type="nombre" name="nombre" placeholder="Nombre" autoComplete="off" />
            <ErrorMessage name="nombre" component="div" className="error-message" />
          </div>
          <div className="contenedor-input-registro">
            <label htmlFor="apellido"></label>
            <Field type="apellido" name="apellido" placeholder="Apellido" autoComplete="off" />
            <ErrorMessage name="apellido" component="div" className="error-message" />
          </div>
          <div className="contenedor-input-registro">
            <label htmlFor="telefono"></label>
            <Field type="telefono" name="telefono" placeholder="Telefono" autoComplete="off" />
            <ErrorMessage name="telefono" component="div" className="error-message" />
          </div>
          <div className="contenedor-input-registro">
            <label htmlFor="provincia"></label>
            <Field type="provincia" name="provinciaNombre" placeholder="Provincia" autoComplete="off" />
            <ErrorMessage name="provincia" component="div" className="error-message" />
          </div>
          <div className="contenedor-boton-registro">
            <button className="boton-registro" type="submit">
              Registrar 
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistroPerfil;