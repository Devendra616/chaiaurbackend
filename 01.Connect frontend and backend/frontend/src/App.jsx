import { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/api/jokes")
    .then((response) =>{
      setJokes(response.data)
    }).catch(error =>{
      console.log(error)
    })
  })

  return (
    <>
      <h1>Chai and Fullstack</h1>
      <p>jokes : {jokes.length}</p>

      {jokes.map( (joke,index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.description}</p>
        </div>
      
    ))}
    </>
  )
}

export default App
