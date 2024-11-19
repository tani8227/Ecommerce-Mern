import { useEffect, useState } from "react";

export default function useToGetHomeMobileData() {
    const [data, setData] = useState(null);
    const [load, setLoad]= useState(false);


    const getAllMobileItems = async () => {
        try {
            console.log("Fetching data from API...");
            const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL||process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL}/api/v1/home/getAllMobile`, {
                method: "GET",
                headers: {
                    'Content-Type': "application/json",  
                   
                }
            });

            if (response.ok) {
                const result = await response.json();
                if(result)
                    {
                        setData(result.data); 
                        console.log(result, "Fetched data successfully");
                        setLoad(true);

                    }
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (err) {
            
            console.error(err);
        } 
    };

   
    useEffect(() => {
        getAllMobileItems();
    }, []);
    return data;
}
