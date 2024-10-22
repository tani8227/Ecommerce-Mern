import { useEffect, useState } from "react";

export default function useToGetAllOrderForSeller(obj) {
    const [orders, setOrders] = useState();
     const newobj=JSON.stringify(obj)

    useEffect(() => {


        console.log("********------")
        async function handleItem() {

            const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/product/getorderedProducts?obj=${newobj}`,
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


        handleItem();

    }, [orders, orders===undefined, newobj])


    console.log(orders);
    return orders;
}
