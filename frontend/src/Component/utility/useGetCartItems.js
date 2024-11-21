import { useEffect, useState } from "react";

export const useGetCartItems = (refreshCart) => {
    const [cartData, setCartData] = useState([]); 

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/user/cart/get`,
                {
                    method: "GET",
                    headers:
                    {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    },
                });


                if (!response.ok) {
                    // Check for specific status codes
                    if (response.status === 401) {
                        console.error("Unauthorized access");
                        window.location.href = '/buyer/signin'; // Redirect to signin
                    } else {
                        const errorData = await response.json();
                        throw new Error(errorData.message || `HTTP Error: ${response.status}`);
                    }
                }

                if (response.ok) {
                    const data = await response.json();
                    
                    if(data)
                        {

                            setCartData(data.data);
                        }           
                } 
            } catch (error) {
                
               

                if (error.statusCode === 401) {
                    console.error("Unauthorized access - please check your credentials or token.",error.statusCode);
                } else {
                    console.error("Error fetching cart data:", error.message || error.statusCode);
                }
            }
        };

        fetchCartItems(); 
    }, [refreshCart]); 

    return  cartData;
};
