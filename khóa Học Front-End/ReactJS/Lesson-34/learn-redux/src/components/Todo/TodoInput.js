import { useDispatch } from "react-redux";
import { createTodo } from "../../actions/todo";
import { useRef } from "react";

function TodoInput () {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        let value = e.target.elements.content.value
        if(value !== "")
        {
            console.log(value);
            dispatch(createTodo(value))
            inputRef.current.value = ""; // dùng useRef để lấy ra input và xóa value khi đã thêm data
            inputRef.current.focus(); // dùng để focus vào ô input khi hoàn thành tác vụ
        }
  
        
        
    }
    return(
        <>
            <div className="todo__input">
                <form onSubmit={handleSubmit}>
                    <input ref={inputRef} name="content"/>
                    <button type="submit">+</button>
                </form>
            </div>
        </>
    )
}
export default TodoInput;