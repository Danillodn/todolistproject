import React, { useState } from 'react'
import TextInput from '../components/TextInput'
import TodoList from '../components/TodoList'
import { Container } from '@mui/system'
import { List } from '@mui/material'


const Home = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
    
  }

  const deleteTodo = (id) => {
    var filtered = todos.filter((e) => e.id !== id)
    setTodos(filtered)
  }

  const editTodo = (id, editedText) => {
    var todosArray = [...todos]
    for(var i in todosArray){
      if(todosArray[i].id === id){
          todosArray[i].entrada = editedText
      }
    }
    setTodos(todosArray)
  }

  return (
        <Container maxWidth="xs" style={{marginTop: "1em"}} >
        <TextInput  addTodo={addTodo} />
        <List sx={{  width: '100%', marginTop: '1em', borderRadius:'10px' }}>
          {todos.map((todo) => (
            <div key={todo.id} style={{ marginTop:"1em"}}>
              <TodoList editTodo={editTodo} todo={todo} deleteTodo={deleteTodo}/>
            </div>
          ))} 
        </List>
        </Container>
      
  )
}

export default Home