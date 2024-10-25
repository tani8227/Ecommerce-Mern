
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function useAddToCard() {

    const navigate = useNavigate();
    async function handleAddToCart(mainCategory,schemaCollectionName, prodId, type) {
        console.log(schemaCollectionName, prodId)



        const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL||process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL}/api/v1/user/cart/add-to-cart/?mainCategory=${mainCategory}&prodId=${prodId}&schemaCollectionName=${schemaCollectionName}`,
            {
                method: 'POST',
                headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },

            });

        if (response.ok) {
            const data = await response.json();
            if (data) {
                 console.log(data);
                if (type==='cartpreview') {

                    const queryParams = new URLSearchParams({
                        modalName: schemaCollectionName,
                        mainCategory: mainCategory,
                       
                    }).toString();
                       
                    navigate(`/buyer/cartDetails?${queryParams}`)
                    toast.success('Product is added in Cart.', {
                        position: "top-right", 
                        autoClose: 3000,
                    });
                }

               
            }
        }
        else {
            toast.error('error in adding the Product in cart.', {
                position: "top-right", 
                autoClose: 3000,
            });
            console.log("jjjjjjjjjopop[][][][[[[", response);
        }

    }
    return handleAddToCart;


}
