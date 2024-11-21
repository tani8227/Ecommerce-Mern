
import { toast } from "react-toastify";

export default function useToPlaceOrder() {


    async function handlePlaceOrder(obj) {
       

          console.log(obj);

        const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/user/order/place`,
            {
                method: 'POST',
                headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                 body:JSON.stringify(obj)
            });
             
            console.log(response,"-*******----333333---444444444444444444444444-------------------------------------------------------");
        if (response.ok) {
            
            const data = await response.json();
            if (data) {

                toast.success('Order Placed Successfully', {
                    position: "top-right", 
                    autoClose: 2000,
                });

            }
        }
        else {
            toast.error('Error while Placing Order ', {
                position: "top-right", 
                autoClose: 2000,
            });

           
        }

    }
    return handlePlaceOrder;


}
