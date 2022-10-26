import SingleTodo from "./singleTodo";

const Todos = ({ todos }) => {

    return (
        <>
            {
                todos.map((todo, idx) => (
                    <SingleTodo todo={todo} key={idx} />
                ))
            }
        </>

    )

}


export default Todos;