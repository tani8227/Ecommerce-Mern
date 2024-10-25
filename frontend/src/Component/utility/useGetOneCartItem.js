import { useEffect, useState } from "react";

export default function useGetOneCartItem(refreshCart,  itemId) {
    const [item, setItem] = useState();
    //  console.log(categoryName, itemId)

    useEffect(() => {

            async function handleItem() {
    
                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL||process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL}/api/v1/user/cart/getItem/${itemId}`,
                    {
                        method:"GET",
                        headers:
                        {
                            "content-type": "Application/json",
                             "Authorization": `Bearer ${localStorage.getItem('token')}`
                        }
                    })
    
                if (response.ok) {
                    const data = await response.json();
                //   console.log(data.data);
                   setItem(data.data)
                
                }
    
            }
           
    
            handleItem();
    
        }, [ itemId , refreshCart])
    
    return  item ;
}
