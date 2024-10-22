import { useEffect, useState } from "react";

export default function useFindUniqueField(categoryName, obj) {
    const [field, setField] = useState(null);
    console.log(obj);
    useEffect(() => {
        
        if (categoryName && obj&& Object.keys(obj).length) {
            const encodedObj = encodeURIComponent(JSON.stringify(obj));
            console.log("Encoded Obj:", encodedObj);

            async function get() {
                try {
                    const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/${categoryName}/field/get?obj=${encodedObj}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': "application/json",
                        }
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setField(data);
                    } else {
                        console.error("Failed to fetch data:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }

            get();
        }
    }, [categoryName ,obj,obj.comboId,]);

    console.log(field);
    return field;
}
