import { useEffect, useState } from "react"

const useFetch=(request)=>{
//1st use State
    const[data,setdata]=useState(null);
    const[pending,setpending]=useState(true);
    const[error,seterror]=useState(null);

    //2nd step useEffect

    useEffect(()=>{
//3rd step timout
        setTimeout(() => {

            //4th fetch next then pending then catch

            fetch(request)
            .then((response)=>{
                if(response.ok===false)
                {
                    throw Error("data not found");
                }
                return response.json()})
            .then((receivedData)=>{ setdata(receivedData.data); setpending(false)})
            .catch((error)=>{seterror(error.message); setpending(false)})

            
        }, 1000);
    },[])

    return{data,pending,error};
}
export default useFetch;