import React, { useState } from 'react';
import axios from 'axios';
import GoogleLoginButton from '../googleLogin/GoogleLoginButton';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import Label from './Label';
import Input from './Input';
import './Login.css';




const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleChange = (field, value) =>{
      if(field === 'email'){
        setEmail(value)
      } else {
        setPassword(value);
      }
  };



  async function handleSubmit() {
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password,
      });
  
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        alert('Sesion Iniciada');
        navigate('/');
      } else {
        setHasError(true);
        setErrorMessage('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error de red:', error);
      setErrorMessage('Error de red: ' + error.message);
      setHasError(true);
    }
  }
  return (
    <div className='contenedor-index-login'>
      <div className='login-container'>
        <div className='login-content'>
          <Title text='BIENVENIDO' />
          { hasError &&
            <label className='label-alert'>
             {errorMessage}
            </label>
          }
          <Label text='Usuario'/>
          <Input className='input-login'
            atributo={{
              id: 'email',
              name: ' email',
              type:'email',
              placeholder: 'Ingrese su Email'
            }}
            handleChange={handleChange}
          />
          <Label text='Contraseña'/>
          <Input className="input-login"
            atributo={{
              id: 'password',
              name: ' password',
              type:'password',
              placeholder: 'Ingrese su Contraseña'
            }}
            handleChange={handleChange}
          />
          <div className="submit-button-container">
            <button className="submit-button" onClick={handleSubmit}>
              Ingresar
            </button>
          </div> 
          <NavLink exact to='./registro' className='registro'>
            <h4 className="text-registro">Crear Cuenta</h4>  
          </NavLink>    
        </div> 
        <GoogleLoginButton />
      </div>
      
    </div>
  )
}

export default Login;