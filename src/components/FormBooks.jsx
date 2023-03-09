import { useState } from "react"

import styles from './formBook.module.css'

let id = 0;

export default function FormBooks({ onError, onData }) {

    const [ book, setBook ] = useState('')
    const [ author, setAuthor ] = useState('')
    

    const handleAuthor = (e) => setAuthor(e.target.value)
    const handleBook = (e) => setBook(e.target.value)

    const validateInputs = (primerInput, segundoInput) => {
        primerInput.trim();
        const primerInputLength = primerInput.length >= 3
        const segundoInputLength = segundoInput.length >= 6;

        return primerInputLength && segundoInputLength
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateInputs(author, book)) {
            onError("Por favor chequea que la información sea correcta")
        } else {
            onError('')
            onData({
                id: id++,
                author,
                book
            })
            
        }
       
    }

    return(
        <>
        <form onSubmit={ handleSubmit } className={ styles.formContainer }>
            <input 
                type="text" 
                placeholder="Autor"
                name="author"
                value={ author }
                onChange={ handleAuthor }
                className={ styles.inputStyle }
            />
            <input 
                type="text" 
                placeholder="Book"
                name="book"
                value={ book }
                onChange={ handleBook }
                className={ styles.inputStyle }
            />
            <button type="submit" className={ styles.btnStyle }>Enviar</button>
        </form>
        </>
    )
}