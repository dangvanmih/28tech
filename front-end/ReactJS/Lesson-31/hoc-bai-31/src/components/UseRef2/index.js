import { useRef, useState } from "react";

function UseRef2 () {
    const [inputValue, setInputValue] = useState("");
    const couterRef = useRef(0);


    const handleChange = (e) => {
        setInputValue(e.target.value);
        couterRef.current = couterRef.current + 1;
    }
        console.log(inputValue); 
        console.log(couterRef.current);
    return (
        <>
            <input value={inputValue} onChange={handleChange}  />


        </>
    )
}
export default UseRef2;