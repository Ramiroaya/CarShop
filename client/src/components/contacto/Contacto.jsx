import React from "react";
import { useForm } from 'react-hook-form';
import './contacto.css';



const Contacto = () => {

    const {register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
  
    return (
        <div className="contenedor-contacto" >
            <div className="contenedor-input-contacto">
                <h2>Formulario de Contacto</h2>
                <form className="contenedor-form-contacto" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input type="text" placeholder="Nombre" {...register('nombre', {
                            required: true,
                            minLength: 2,
                        })} />
                        {errors.nombre?.type === 'required' && <p>El campo Nombre es requerido</p>}
                        {errors.nombre?.type === 'minLength' && <p>El Nombre debe tener minimo 2 caracteres</p>}
                    </div>
                    <div>
                        <input type="text" placeholder="Apellido" {...register('apellido', {
                            required:true,
                            minLength: 2,
                        })} />
                        {errors.apellido?.type === 'required' && <p>El campo Apellido es requerido</p>}
                        {errors.apellido?.type === 'minLength' && <p>El Apellido debe tener minimo 2 caracteres</p>}
                    </div>
                    <div>
                        <input type="text" placeholder="Email" {...register('email', {
                            required: 'El email es requerido',
                            pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Ingresa un email válido', }                        
                        })} />
                        {errors.email?.type === 'pattern' && <p>El email ingresado no es valido</p>}
                    </div>
                    <div>
                        <h3>Consulta</h3>
                        <input className="input-consulta" type="text" {...register('consulta', {
                            require: true,
                            maxLength:{
                                value :150, 
                                message:'La consulta no puede tener más de 150 caracteres',}
                        })} />
                    </div>
                    <input className="boton-submit" type="submit" value="Enviar"/>
                </form>
            </div>
        </div>
    )
  }
export default Contacto;
  