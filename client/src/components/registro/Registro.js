import React from 'react';
import { useState } from 'react';

import './registro.css';
import Title from '../login/Title';


const Registro = () => {
    const [ nombre, setNombre ] = useState('');
    const [apellido, setApellido ] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const errorMessage= validate(nombre, apellido, email, password);
    

  return (
    <div className="contenedor-registro">
        <form className='contenedor-form-registro'
            onSubmit={ev => {
                ev.preventDefault()
                registrarUsuario(nombre, apellido, email, password);
            }}>
            <Title text='Registro'/>
            <input className='contenedor-input-registro'
                type='text'
                name='nombre'
                placeholder='Nombre'
                autoComplete='off'
                value={nombre}
                onChange={ev => setNombre(ev.target.value)} 
            ></input>
            <input className='contenedor-input-registro'
                type='text'
                name='apellido'
                placeholder='Apellido'
                autoComplete='off'
                value={apellido}
                onChange={ev => setApellido(ev.target.value)} 
            ></input>
            <input className='contenedor-input-registro'
                type='text'
                name='email'
                placeholder='Email'
                autoComplete='off'
                value={email}
                onChange={ev => setEmail(ev.target.value)} 
            ></input>
            <input className='contenedor-input-registro'
                type='password'
                name='password'
                placeholder='Contraseña'
                autoComplete='off'
                value={password}
                onChange={ev => setPassword(ev.target.value)} 
            ></input>
            
            <div className='contenedor-boton-registro'>
                <button  className='boton-registro'type='submit' disabled={errorMessage}>
                    Registrar
                </button>
            </div>
        </form>
    </div>
  )
};

const validate = ( nombre, apellido, email, password ) => {
    
    if(!email.includes('@')) return 'Email incorrecto'
    if(password.length < 4) return 'Password vulnerable';
};



const registrarUsuario = (nombre, apellido, email, password) => {
  
  }

  // Verificar si el usuario ya está registrado por su email
  /*const usuarioExistente = usuarios.find(usuario => usuario.email === email);
  if (usuarioExistente) {
    alert('El usuario ya está registrado.');
    
  }*/

  // Crear un nuevo objeto de usuario
  /*const nuevoUsuario = {
    nombre,
    apellido,
    email,
    password
  };  
  usuarios.push(nuevoUsuario);
  const usuariosData = JSON.stringify(usuarios, null, 2);
  fs.writeFileSync('usuarios.json', usuariosData);

  alert('Registro exitoso!');*/



export default Registro;