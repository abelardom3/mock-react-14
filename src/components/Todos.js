import SingleTodo from "./singleTodo";

const Todos = ({ todos }) => {

    return (
        <div style={{ width: '12rem', margin: 'auto', padding: '2rem' }}>
            {todos.map((todo, ind) => (
                <SingleTodo todo={todo} key={ind} />
            ))}
        </div>
    )



}


export default Todos;