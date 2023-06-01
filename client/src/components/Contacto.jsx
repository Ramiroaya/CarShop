import React from "react";
import { useState } from "react";
import  FeedbackForm  from "./FeedBack";


const FormContact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); 
  
    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }
  
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <input
            placeholder="Nombre"
            value={firstName}
            onChange={handleFirstNameChange}
        />
        <input
            placeholder="Apellido"
            value={lastName}
            onChange={handleLastNameChange}
        />
        <h1>Hola, {firstName} {lastName}</h1>
        <button onClick={FeedbackForm}>Enviar</button>
    </form>
    )
  }
export default FormContact;
  