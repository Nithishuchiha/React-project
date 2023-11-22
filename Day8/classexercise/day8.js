import { useEffect, useState } from "react"

export default function UseEffectDemo() {
    const [message,setMessage] = useState("Hello dear one, learning React?");
    
    useEffect(()=>{
        console.log("useEffect called");
        setTimeout(() => {
          setMessage("Great... This is the time to learn about hooks");
        },2000);
    },[]);
    return (
      <div>
        <h4>{message}</h4>
      </div>
    )
}