const Todo = (props) => {
    const todos = props.myData;

    return (
        <div>
            <div className='todos-container'>
                <div className="title">{props.title}</div>
                {todos.map(todo => {
                    return (
                        <li className='todos-child' key={todo.id}>{todo.id} - {todo.title} </li>
                    )
                })}


            </div>
            <hr />
        </div>

    )
}
export default Todo;