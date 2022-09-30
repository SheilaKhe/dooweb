import React, { useRef } from 'react';
import '../styles/Form.css';

function Form(params) {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const msgRef = useRef(null);
    const handleSubmit = (event) => {
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            msg: msgRef.current.value
        }
        alert('Votre message : ' + JSON.stringify(data))
    }
    return(
        <div className="containerForm">
            <form className="form">
                <label for="name">My name is</label>
                <input type="text" name='name' className='name' tabIndex='1' ref={nameRef}/>
                <label for="email">Here is my e-mail</label>
                <input type="email" name="email" id="email" className='email' tabIndex="2" ref={emailRef}/>
                <label for="msg">I'm looking for</label>
                <textarea name="msg" id="msg" cols="30" rows="1" tabIndex="3" ref={msgRef}></textarea>
                <button type="submit" className='send'
                onClick={handleSubmit}>Send</button>
            </form>

        </div>
    )
}

export default Form