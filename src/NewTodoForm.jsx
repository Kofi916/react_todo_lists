import { useState } from "react"
import "./styles.css"



export function NewTodoform(props){
    props.onSubmit
    const [newItem, setNewItem] = useState("")

function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    props.onSubmit(newItem)

    setNewItem("")
    }

    return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)}
            type="text" 
            id="item" 
            />
        </div>
    <button className="btn">Add</button>
    </form>
    )
}