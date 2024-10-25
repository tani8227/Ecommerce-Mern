
import { useEffect, useState } from "react";

export default function useToGetOneOrder(productCategory, orderItemId) {

    const [AllProduct, setAllProduct] = useState([]);

    console.log(productCategory,orderItemId);
    useEffect(() => {


        async function getAllitems() {

            const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL||process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL}/api/v1/user/order/getone/?modalName=${productCategory}&orderItemId=${orderItemId}`,
                {
                    method: "GET",
                    headers:
                    {
                        'content-type': "Apllication/json",
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    }
                })

            if (response.ok) {
                const data = await response.json();
                console.log(data, "]]]]]]]]]oopo[[[[[")
                if (data) {

                    setAllProduct(data);
                }

            }

        }

       getAllitems();

    }, [productCategory, orderItemId])


    console.log(AllProduct, "llllll")
    

    return AllProduct

}


