import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo, undoTodo } from "../../actions/todo";

function TodoList() {
    const todoList = useSelector(state => state.todos)
    const dispatch = useDispatch();
    const handleCompleted = (id) => {
        dispatch(completedTodo(id))
        
    }
    const handleUndo = (id) => {
        dispatch(undoTodo(id))
        
    }
    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    console.log(todoList);
    
    return (
        <>
            {todoList && (
                <ul className="todo__list">
                    {todoList.map(item => (
                        <li className="todo__item" key={item.id}>
                            <span className={"todo__content " + (item.complete && "todo__content--completed")}>{item.content}</span>
                            {/* check nếu item.completed mà true thì + thêm class kia */}

                            {item.complete ? (
                                <button onClick={() => handleUndo(item.id)} className="completed">U</button>
                            ) : (
                                <button onClick={() => handleCompleted(item.id)} className="completed">V</button>
                            )}

                            <button onClick={() => handleDelete(item.id)}  className="delete">X</button>
                        </li>
                    ))}
                </ul>
            )}

        </>
    )
}
export default TodoList;