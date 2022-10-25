import { useState, useEffect } from 'react'
import Form from './components/Form'
import Title from './components/Title'
import Todos from './components/Todos'



const App = () => {

    const [todos, setTodos] = useState([])


    const addToTodo = (text) => {
        setTodos([...todos, text])
    }


    return (
        <div className='main-container'>
            <Title />
            <Form addToTodo={addToTodo} />
            <Todos todos={todos} />
        </div>
    )

}

export default App