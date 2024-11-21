import { useEffect, useState } from "react";

export default function useToGetAllSellerOrderedProduct(flg) {
    const [orders, setOrders] = useState();
    //  console.log(categoryName, itemId)

    useEffect(() => {


        console.log("********------")
        async function handleItem() {
              if(orders===undefined)
                {

                    const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/product/get/`,
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

    }, [orders, flg])


    console.log(orders);
    return orders;
}
