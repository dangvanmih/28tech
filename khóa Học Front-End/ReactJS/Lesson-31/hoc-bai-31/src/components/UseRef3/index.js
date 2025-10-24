import { useRef, useState } from "react";

function RandomGift () {
    const gifts = ["Điện thoại", "Máy tính", "Xe máy", "Ô tô", "Đồng hồ"];
    const [result, setResult] = useState("");
    const couterRef = useRef(0);
    const hadnleRandom = () => {
        if(couterRef.current < 3)
        {
            const random = Math.floor(Math.random()*gifts.length);
            setResult(gifts[random]);
            couterRef.current = couterRef.current + 1;
        }
        else
        {
            alert("Bạn đã hết lượt");
        }
   
    }
    console.log(couterRef);
    
    return (
       
        <>
            <button onClick={hadnleRandom}>Random</button>
            <div>Bạn đã trúng thưởng: {result}</div>
        
        </>
    )
}
export default RandomGift;