import { TodoItem } from "./TodoItem"

export function TodoList({ todos, setTodos }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => (
                <TodoItem
                    {...todo}
                    key={todo.id}
                    setTodos={setTodos}
                />
            ))}
        </ul>
    )
}
