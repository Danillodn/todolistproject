import Input from '@mui/joy/Input';
import React, { useState } from 'react'
import { Button, Paper } from '@mui/material'


const TextInput = ( {addTodo} ) => {
  
  const [entrada, setEntrada] = useState(null)
  const [id, setId] = useState(0)

  const Todo = (entrada) => {
    
      const todoObj = { entrada: entrada, id: id}
      setId(id+1)
      addTodo(todoObj)
  }

  return (
    <Paper style={{ padding:"1em", borderRadius:'10px' }}>
    <div style={{display:"flex", justifyContent:"center"}}>

    <Input 
    placeholder="Escreva Aqui…" 
    fullWidth  
    onChange={(e) => setEntrada(e.target.value)}
    /> 
    <Button variant="contained" onClick={() => Todo(entrada)}>Adicionar</Button>
    </div>
    </Paper>
  )
}

export default TextInput

