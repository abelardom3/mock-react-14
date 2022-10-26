import axios from 'axios'
import { useState, useEffect } from 'react'
import Form from './components/Form'
import Title from './components/Title'
import Todos from './components/Todos'


const App = () => {

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const addText = (text) => {
        setTodos([...todos, text])
    }

    useEffect(() => {
        const apiCall = async () => {
            const result = await axios.get('https://jsonplaceholder.typicode.com/todos')
            const data = result.data
            setTodos(data)
            setLoading(false)
        }
        apiCall()
    }, [])


    return (

        <div className='main-container'>
            {loading && <h1>loading</h1>}
            {!loading && <>
                <Title />
                <Form addText={addText} />
                <Todos todos={todos} />

            </>
            }


        </div>
    )

}

export default App