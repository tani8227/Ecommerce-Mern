import { useEffect, useState } from "react";

export const useGetCartItems = (refreshCart) => {
    const [cartData, setCartData] = useState([]); 

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL||process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL}/api/v1/user/cart/get`,
                {
                    method: "GET",
                    headers:
                    {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    
                    if(data)
                        {

                            setCartData(data.data);
                        }
                  
                  
                } else {
                    const data = await response.json();
                    setCartData(data.data);
                    console.log("Failed to fetch cart data");
                }
            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        };

        fetchCartItems(); 
    }, [refreshCart]); 

    return  cartData;
};
