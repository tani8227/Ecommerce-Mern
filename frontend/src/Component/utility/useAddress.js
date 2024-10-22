import { useState, useEffect } from "react";

export default function useAddress(userId, toggle)
{
    console.log(userId);
    const [data, setData]= useState();
    useEffect(()=>
        {
            async function getaddress()
            {
                const response= await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/user/Address/get?userId=${userId}`,
                    {
                        method:'Get',
                        headers:
                        {
                            'Content-Type':'Application/json',
                            'Authorization':`Bearer ${localStorage.getItem('token')}`,
                        }
                    })
                 
                    if(response.ok)
                        {
                            const result=response.json();
                            result.then((data)=>
                                {
                                    setData(data);
                                   
                                })
                           
                            
                        }

            }
            getaddress();
        }, [userId,data, toggle])

        console.log(data);

        return data;

}