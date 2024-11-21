// import React from "react";
// import { useEffect , useState } from "react";

// export default function AuthChecker()
// {
//         const [load, setLoader]= useState();

//        async function handleAuthChecker()
//        {
//            const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL}/api/v1/`,
//             {
//                 method:'GET',
//                headers:
//                {
//                    'Content-Type':'application/json',
//                    'Authorization':`Bearer ${localStorage.getItem('token')}` 
//                }
//             });

//             if(response.ok)
//                 {
//                     const data = await response.json();
                    
//                     if(data)
//                         {
                             
//                         }   
//                 }else
//                 {

//                 }
          
//        }
// }