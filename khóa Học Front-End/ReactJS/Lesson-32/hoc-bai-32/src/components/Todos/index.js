import { useEffect, useReducer, useRef } from "react";

const init = [
    {
        id: 1,
        content: "Thứ 2 học HTML"
    },
    {
        id: 2,
        content: "Thứ 3 học CSS"
    },
    {
        id: 3,
        content: "Thứ 4 học JavaScriptl"
    }
]

const reducer = (state, action) => {
    // 2 action create and delete
    console.log(state, action);
        switch (action.type) {
            case "CREATE":
                return [
                    ...state,
                    {
                        id:Date.now(),
                        content: action.value
                    }
                ]
            case "DELETE":
                const newState = state.filter(todo => todo.id !== action.id); // hàm filter sẽ lọc qua từng cái todo như hàm này nó sẽ lọc ra cái nào mà có id khác với action thì nó sẽ lấy ra.
                console.log(newState);
                return newState;
            default:
                return state;
            }

}

function Todos () {
    const [todos, dispatch] = useReducer(reducer, init);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleSubmit = (e) => {
    const value = e.target.elements.inputTodo.value
    e.preventDefault(); // ngăn load lại trang
    console.log(value);
    if(value) {
        dispatch({
            type: "CREATE",
            value: value
        })
        inputRef.current.value = "";
    }
    
}
    const handleDelete = (id) => {
        dispatch({
            type: "DELETE",
            id: id
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} name = "inputTodo" />
                <button>Thêm Todo</button>
            </form>


            {todos.length > 0 && (
                <ul>
                    {todos.map(item  => (
                        <li key={item.id}>
                            {item.content}
                            <button onClick={() => handleDelete(item.id)}>Xóa</button>
                        </li>
                    ))}
                  
                </ul>
            )}
        
        
        </>
    )
}
export default Todos;