import { useState, useEffect } from 'react';

function useGetItem(categoryName, itemName) {
    const [data, setData] = useState(null);
    const [loader, setLoader]= useState(false);
    
    console.log(categoryName, itemName)
    useEffect(() => {
          
        const fetchData = async () => {
           
                   if(categoryName!==undefined&&itemName!==undefined)
                    {

                        
                        const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/${categoryName}/model-name/${encodeURIComponent(itemName)}`, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                        
                        if (response.ok) {
                            const result = await response.json();
                            setData(result.data);
                            setLoader(true);
                        }
                        
                    }
                }

        fetchData();
    },[categoryName, itemName] ); 

    return { data, loader };
}

export default useGetItem;
