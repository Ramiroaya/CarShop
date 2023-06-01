import React from "react";
import { useState } from "react";


const FeedbackForm = () => {
    const [isSent, setIsSent] = useState('');
    const [message, setMessage] = useState('');
    if (isSent) {
        return <h1> Gracias!!</h1>;
    } else{
               
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                alert(`Sending: "${message}"`);
                setIsSent(true);
            }}>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br />
                <button type="submit">Enviar</button>
            </form>            
        );
    }
}
export default FeedbackForm;