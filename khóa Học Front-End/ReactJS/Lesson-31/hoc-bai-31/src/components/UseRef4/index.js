import { useEffect, useRef, useState } from "react";

function UseRef4 () {
    const [inputValue, setInputValue] = useState("");
    const couterRef = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },[])
    const handleChange = (e) => {
        setInputValue(e.target.value);
        couterRef.current = couterRef.current + 1;
        console.log(inputRef.current.value);
        
    }
    return (
        <>
            <input ref={inputRef} value={inputValue} onChange={handleChange}  />


        </>
    )
}
export default UseRef4;