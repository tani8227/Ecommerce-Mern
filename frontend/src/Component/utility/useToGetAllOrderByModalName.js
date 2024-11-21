import { useEffect, useState } from "react";

export default function useToGetAllOrderByModalName(modalName, flg) {

    const [AllProduct, setAllProduct] = useState([]);

    useEffect(() => {
  

        async function getAllitems() {

            const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/product/model-name/${modalName}`,
                {
                    method: "GET",
                    headers:
                    {
                        'content-type': "Apllication/json",
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    }
                })

            if (response.ok) {
                const AllItems = await response.json();
               if(AllItems)
                {
                    setAllProduct(AllItems.data)
                }

            }

            

        }

        getAllitems();

    }, [modalName, flg])


    console.log(AllProduct, "llllll")

    return AllProduct

}


