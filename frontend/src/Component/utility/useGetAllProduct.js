import { useEffect , useState } from "react";

export default function useGetAllItems(itemName) {
     
   
        const [AllProduct, setAllProduct]=useState();

     useEffect(()=>{

         
            async function getAllitems()
            {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/${itemName}/get`, 
                    {
                        method:"GET",
                        headers:
                        {
                            'content-type':"Apllication/json"
                        }
                    })
                    
                    if(response.ok)
                        {
                            const AllItems=await response.json();
                            
                            setAllProduct(AllItems);
                            

                        }else
                        {
                            console.log(response ,"pipdi 3333")
                        }
             }
        
             getAllitems();

     }, [itemName])

     return {AllProduct}
    
}


