import { useEffect, useState } from "react"

const CallingProduct =()=>{
    const [product ,setProduct ]=useState([]);
    useEffect(()=>{
        fetch('./courses.json')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])
    return [product];
}
export default CallingProduct;