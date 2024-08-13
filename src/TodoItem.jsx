export function TodoItem({completed, id, title, setTodos }){
    return (
        <li >
                <label>
                <input 
                    type="checkbox" 
                    checked={completed} 
                    onChange={() => {
                    setTodos(currentTodos =>
                        currentTodos.map(t => 
                        t.id === id ? {...t, completed: !t.completed} : t
                        )
                    )
                    }}
                />
                {title}
                </label>
                <button 
                className="btn btn-danger" 
                onClick={() => {
                    setTodos(currentTodos =>
                    currentTodos.filter(t => t.id !== id)
                    )
                }}
                >
                Delete
                </button>
            </li>
    )
}