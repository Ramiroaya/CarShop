import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

import './registro.css';
import Title from '../login/Title';

const Registro = () => {
  const navigate = useNavigate();
  const initialValues = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    provincia: '',
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es obligatorio'),
    apellido: Yup.string().required('El apellido es obligatorio'),
    email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
    telefono: Yup.string(),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
    provincia: Yup.string(),
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:3001/usuario', values);

      if (response.status === 200) {
        console.log('Registro exitoso');
        navigate('/usuario');
      } else {
        console.error('Error en el registro:', response.data);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };
  
  return (
    <div className="contenedor-registro">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="contenedor-form-registro">
          <Title text="Registro" />
          <div className="contenedor-input-registro">
            <label htmlFor="nombre"></label>
            <Field type="text" name="nombre" placeholder="Nombre" autoComplete="off" />
          </div>
          <div className="contenedor-input-registro">
            <label htmlFor="apellido"></label>
            <Field type="text" name="apellido" placeholder="Apellido" autoComplete="off" />
          </div>
          <div className="contenedor-input-registro">
            <label htmlFor="email"></label>
            <Field type="email" name="email" placeholder="Email" autoComplete="off" />
          </div>
          <div className="contenedor-input-registro">
            <label htmlFor="telefono"></label>
            <Field type="text" name="telefono" placeholder="Telefono" autoComplete="off" />
          </div>
          <div className="contenedor-input-registro">
            <label htmlFor="password"></label>
            <Field type="password" name="password" placeholder="Contraseña" autoComplete="off" />
          </div>
          <div className="contenedor-input-registro">
            <label htmlFor="provincia"></label>
            <Field type="text" name="provincia" placeholder="Provincia" autoComplete="off" />
          </div>
          <div className="contenedor-boton-registro">
            <button className="boton-registro" type="submit">
              Registrar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Registro;
