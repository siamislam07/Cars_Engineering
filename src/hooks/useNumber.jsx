import axios from "axios";
import { useEffect, useState } from "react";

const useNumber = () => {
    const [number , setNUmber]  = useState(0)
    useEffect(()=>{
        axios.get('/getNumber')
        .then(res=>{
            setNUmber(res.data)
        })
    },[])
    return number
};

export default useNumber;