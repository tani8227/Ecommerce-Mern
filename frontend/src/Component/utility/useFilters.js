import { useEffect, useState } from "react"

export default function useFilter(categoryName, companyName, price) {
    const [filterdata, setFilterdata] = useState([]);
    const [newfilterdata, setNewFilterdata] = useState([]);
    console.log(categoryName, companyName, price);

    useEffect(() => {

        if (companyName&&categoryName.length>0) {

            async function get() {

                const companyname = companyName.map(async (company_Name, index) => {

                    const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/filter/companyNameAndPrice/?categoryName=${categoryName}&company_Name=${company_Name.name}&company_status=${company_Name.checked}&minRange=${price[0]}&maxRange=${price[1]}`,
                        {
                            method: "GET",
                            headers:
                            {
                                "Content-Type": "Application/json",
                            }
                        })

                    if (response.ok) {
                        const Filterdata = await response.json();
                        console.log(Filterdata.data);
                        return Filterdata.data;
                    }else
                    {
                        console.log(filterdata);
                    }
                })
                const AllcompanyName = await Promise.all(companyname);
                console.log(AllcompanyName);
                const flattenedData = AllcompanyName.flat();
                                    setFilterdata(

                        flattenedData

                    );
                
            }
            get();
        }
    }, [categoryName, companyName, price,])

    console.log(filterdata);
    useEffect(() => {
        if (filterdata.length>0&&companyName!==undefined&&companyName.length > 0) {
            const companiesChecked = companyName.filter((data) => data.checked === true);
            
            const filteredData = filterdata.filter((data) =>
                companiesChecked.some((company) =>{
                    if(data!==undefined)
                        {
                            return company.name === data.companyName
                            
                        }
                        return false;
                    } 
                ));
                
                setNewFilterdata(filteredData);
            }
            if(filterdata.length===0)
                {
                    setNewFilterdata(filterdata);
                }
        }, [companyName, filterdata]);
        
        console.log(newfilterdata);
    return newfilterdata;

}