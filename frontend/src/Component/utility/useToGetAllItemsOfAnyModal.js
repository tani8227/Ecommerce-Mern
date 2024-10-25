import { useEffect, useState } from "react"

export default function useToGetAllItemsOfAnyModal( modalName, price) {
    const [data, setData] = useState([]);
    
    // console.log( modalName, price);

    useEffect(() => {

        if (modalName !== null &&price.length>0) {

            async function get() {

              

                    const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL||process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL}/api/v1/seller/filter/getAll/?modalName=${modalName}&minRange=${price[0]}&maxRange=${price[1]}`,
                        {
                            method: "GET",
                            headers:
                            {
                                "Content-Type": "Application/json",
                            }
                        })

                    if (response.ok) {
                        const result = await response.json();
                        
                        if(result)
                            {
                                setData(result.data)
                            }
                    }
            
               
                   

                   
            }
            get();
        }
    }, [modalName, price,])

    
    return  data;

}