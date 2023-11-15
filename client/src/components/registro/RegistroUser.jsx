import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

import './registro.css';
import Title from '../login/Title';

const RegistroUser = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('El email no es válido')
      .required('El email es obligatorio'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('La contraseña es obligatoria'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Confirma tu contraseña'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:3001/usuario', values);
    
      if (response.status === 201) {
        if (response.data.message) {
          console.error('Error en el registro:', response.data.message);
        } else {
              alert(`Usuario ${values.email} creado correctamente`);
              console.log('Registro exitoso');
              navigate('/usuario/registroPerfil');
          }
      } else if (response.status === 400) {
        alert('El correo electrónico ya está en uso.');
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
          <Title text="Registro" />
          <div className="contenedor-input-registro">
            <label htmlFor="email"></label>
            <Field type="email" name="email" placeholder="Email" autoComplete="off" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="contenedor-input-registro">
            <label htmlFor="password"></label>
            <Field type="password" name="password" placeholder="Contraseña" autoComplete="off" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <div className="contenedor-input-registro">
            <label htmlFor="confirmPassword"></label>
            <Field type="password" name="confirmPassword" placeholder="Confirmar Contraseña" autoComplete="off" />
            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
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

export default RegistroUser;
