
import axios from 'axios';
import { useState} from 'react';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      if (!email || !password) {
        setHasError(true);
        setErrorMessage('Por favor, ingresa correo y contraseña válidos');
        return;
      }
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password,
      });
  
      if (response.data.access_token) {
        const token = response.data.access_token;      
        const storedEmail = email;
        const storedUserName = response.data.perfil.nombre;
        localStorage.setItem('token', token);
        localStorage.setItem('email', storedEmail); 
        localStorage.setItem('nombre', storedUserName);
        alert(`Hola ${storedUserName}`);
        setIsLoggedIn(true);
        navigate('/');     
      
      } else {
        setHasError(true);
        setErrorMessage('Credenciales incorrectas');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setErrorMessage('Credenciales incorrectas. Verifica tu correo y contraseña.');
        } else {
          setErrorMessage('Hubo un error en el servidor. Inténtalo de nuevo más tarde.');
        }
        setHasError(true);
      } else {
        setErrorMessage('Error de red: ' + error.message);
        setHasError(true);
      }
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
              name: 'email',
              type:'email',
              placeholder: 'Ingrese su Email',
              value: email,
            }}
            handleChange={handleChange}
          />
          <Label text='Contraseña'/>
          <Input className="input-login"
            atributo={{
              id: 'password',
              name: 'password',
              type:'password',
              placeholder: 'Ingrese su Contraseña',
              value: password,
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