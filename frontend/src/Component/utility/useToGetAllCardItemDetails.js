
import { useEffect, useState } from "react";

export default function useToGetAllCardItemDetails(AllItems) {

    const [AllProduct, setAllProduct] = useState([]);
    console.log(AllItems, );
    useEffect(() => {
        
        const set= new Set()

        async function getAllitems() {

            if(AllItems!==undefined)
                {

                     AllItems.map(async (item) => {
                        
                        const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL||process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL}/api/v1/user/order/getOrderItemDetails/?modalName=${item.modalName}&orderItemId=${item.orderItemId}&orderId=${item._id}`,
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
                    console.log(AllItems, "]]]]]]]]]oopo[[[[[")
                    if (AllItems) {
                        
                        setAllProduct((prev) => {
                            
                            if (prev !== undefined && prev.length === 0) {
                                // console.log(prev, AllItems.data, "///****");
                                set.add(item._id);
                                
                                return [...prev, AllItems.data]
                            }
                            
                            
                            
                            else if (prev !== undefined && prev.length > 0) {
                                
                                const check = prev.some((ele) =>ele.orderId===AllItems.data.orderId)
                                if (check) {
                                    return [...prev];
                                } else {
                                    
                                    set.add(item._id);
                                    return [...prev, AllItems.data];

                                }
                                    
                                
                            }
                        }
                    );
                }
                
                
            }
        })
        
    }

        }

        getAllitems();

    }, [AllItems])

     
    console.log(AllProduct, "llllll")
   

    return AllProduct

}


