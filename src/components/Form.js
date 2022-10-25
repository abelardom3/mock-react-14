import { useState } from "react";



const Form = ({ addToTodo }) => {

    const [text, setText] = useState('')

    const handleSub = (e) => {
        e.preventDefault()
        addToTodo(text)
        setText("")
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
    }




    return (
        <>
            <form onSubmit={handleSub}>
                <label>New Todo</label>
                <input type='text' value={text} onChange={handleChange} />
                <input type='submit' />
            </form>


        </>
    )



}


export default Form; 
