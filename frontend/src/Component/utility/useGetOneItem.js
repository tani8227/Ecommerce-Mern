import { useEffect, useState } from "react";

export default function useGetOneItem( categoryName, itemId) {
    const [item, setItem] = useState();
    //  console.log(categoryName, itemId)

    useEffect(() => {
               
            async function handleItem() {
    
                if(itemId!==undefined)
                    {

                        const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/${categoryName}/${itemId}`,
                            {
                        method:"GET",
                        headers:
                        {
                            "content-type": "Application/json"
                        }
                    })
                    
                    if (response.ok) {
                        const data = await response.json();
                        
                        setItem(data.data)
                        
                    }
                    
                }
                
            }
    
            handleItem();
    
        }, [categoryName, itemId, ])
    
    return { item };
}
