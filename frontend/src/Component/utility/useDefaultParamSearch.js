import { useEffect, useState } from "react"

export default function useDefaultParamSearch(categoryName, companyName, price) {

    const [filterdata, setFilterdata] = useState();
    console.log(categoryName, companyName, price[0], price[1])

    useEffect(() => {
        if (price.length > 0) {

            async function get() {

                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/filter/paramsSaerch/?categoryName=${categoryName}&company_Name=${companyName}&minRange=${price[0]}&maxRange=${price[1]}`,
                    {
                        method: "GET",
                        headers:
                        {
                            "Content-Type": "Application/json",
                        }
                    })

                if (response.ok) {
                    const Filterdata = await response.json();

                    console.log(Filterdata.data,);
                    if (Filterdata) {

                        setFilterdata(Filterdata.data);
                    }

                } else {
                    console.log("7/8/9*---+++");
                }
            }
            get();
        }

    }, [categoryName, companyName, price])

    return filterdata
}