const Todo = (props) => {
    // const todos = props.myData;
    const { myData, title, deleteDataTodo } = props;

    const handleDelete = (id) => {
        deleteDataTodo(id)
    }

    return (
        <div>
            <div className='todos-container'>
                <div className="title">{title}</div>
                <div>
                    {myData.map(todo => {
                        return (
                            <div key={todo.id}>
                                <li className='todos-child' >{todo.id} - {todo.title}
                                    <span onClick={() => handleDelete(todo.id)}> X</span> </li>
                            </div>
                        )
                    })}
                </div>

            </div>
            <hr />
        </div>

    )
}
export default Todo;