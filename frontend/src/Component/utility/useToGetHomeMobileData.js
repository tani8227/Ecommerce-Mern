import { useEffect, useState } from "react";

export default function useToGetHomeMobileData() {
    const [data, setData] = useState(null);


    const getAllMobileItems = async () => {
        try {
            console.log("Fetching data from API...");
            const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/home/getAllMobile`, {
                method: "GET",
                headers: {
                    'Content-Type': "application/json",  
                   
                }
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result, "Fetched data successfully");
                setData(result.data); 
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
