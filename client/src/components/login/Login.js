import React, { useState } from 'react';
import GoogleLoginButton from '../googleLogin/GoogleLoginButton';
import { NavLink } from 'react-router-dom';
import Title from './Title';
import Label from './Label';
import Input from './Input';
import './Login.css';




const Login = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);


  const handleChange = (name, value) =>{
      if(name === 'usuario'){
        setUser(value)
      } else {
        setPassword(value);
      }
  };

  function ifMatch(param) {
    if(param.user.length > 0 && param.password.length > 0){
      if(param.user === 'usuario base de datos' && param.password === 'password usuario'){
        let ac = {user, password};
        let account = JSON.stringify(ac);
        localStorage.setItem('account',account);
        setIsLogin(true);
      }else {
        setIsLogin(false);
        setHasError(true);
      }
    } else {
      setIsLogin(false);
      setHasError(true);
    }
  };

  function handleSubmit() {
    let account = {user, password};
    if(account) {
        ifMatch(account);
    }
  };

  return (
    <div className='contenedor-index-login'>
      <div className='login-container'>
        <div className='login-content'>
          <Title text='BIENVENIDO' />
          { hasError &&
            <label className='label-alert'>
              Su contraseña o usuario son incorrectos,
              o inexistentes en nuestra plataforma.
            </label>
          }
          <Label text='Usuario'/>
          <Input className='input-login'
            atributo={{
              id: 'usuario',
              name: ' usuario',
              type:'text',
              placeholder: 'Ingrese su Usuario'
            }}
            handleChange={handleChange}
          />
          <Label text='Contraseña'/>
          <Input className="input-login"
            atributo={{
              id: 'contraseña',
              name: ' contraseña',
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