import FormBooks from './components/FormBooks'
import CardBooks from './components/CardBooks'
import Error from './components/Error'

import { useState } from 'react'

import style from './app.module.css'


function App() {

  const [ data, setData ] = useState([])
  const [ error, setError ] = useState('')

  const handleError = (error) => {
    error ? console.log("error") : console.log("No")
    setError(error)
  }

  const handleData = (info) => {
    setData([...data, info])
  }
  

  return (
    <>
      <div >
        <h1 className={style.textAlign}>Ingrese un autor y un libro</h1>

        <FormBooks onError={ handleError } onData={ handleData }/>

        { error ? 
          <Error error={ error }/> : 
          data.map((d) => {
            return  <CardBooks key={d.id} data={ d }/>
          })
        }
      </div>

    </>
      
  )
}

export default App
