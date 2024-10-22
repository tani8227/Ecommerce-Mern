import { useEffect, useState } from "react";

export default function useToGetHomeFashionData() {
    const [data, setData] = useState(null);


    const getAllFashionItems = async () => {
        try {
            console.log("Fetching data from API...");
            const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/home/getAllFashion`, {
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
        getAllFashionItems();
    }, []);
    return data;
}
