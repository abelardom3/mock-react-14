import { useState } from "react";



const Form = ({ addText }) => {

    const [text, setText] = useState({ title: "" })

    const handleChange = (e) => {
        setText({ ...text, title: e.target.value })
    }

    const handleSub = (e) => {
        e.preventDefault()
        addText(text)
        setText({ ...text, title: '' })
    }


    return (
        <>
            <form onSubmit={handleSub}>
                <input type='text' value={text.title} onChange={handleChange} />
                <input type='submit' />
            </form>


        </>
    )

}


export default Form; 
