import { useEffect, useState } from "react";

export default function useGetAllOrders() {
    const [orders, setOrders] = useState();
    //  console.log(categoryName, itemId)

    useEffect(() => {


        console.log("********------")

        async function handleItem() {

            if(orders===undefined){

                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL||process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL}/api/v1/user/order/get`,
                    {
                        method: "GET",
                        headers:
                        {
                            "content-type": "Application/json",
                            'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        }
                    })
                    
                    if (response.ok) {
                        const data = await response.json();
                        if (data) {
                            
                            console.log(data.data);
                            setOrders(data.data)
                        }
                        
                    }
                    
                }
            }


        handleItem();

    }, [orders])


    console.log(orders);
    return orders;
}
