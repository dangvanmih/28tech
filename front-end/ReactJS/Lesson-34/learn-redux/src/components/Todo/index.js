import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/Todo.css"
function Todo() {
    return (
        <>
            <div className="todo">
                <TodoInput />
                <TodoList />
            </div>
        </>
    )
}
export default Todo;