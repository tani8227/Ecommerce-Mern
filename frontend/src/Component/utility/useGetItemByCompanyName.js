import { useEffect, useState } from "react";

export default function useGetAllItemsByComapanyName(categoryName, companyName) {

    const [AllProduct, setAllProduct] = useState([]);
    console.log(categoryName, companyName);
    useEffect(() => {


        async function getAllitems() {


            const companiesData = companyName.map(async (company_Name) => {

                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/${categoryName}/companyName/${company_Name}`,
                    {
                        method: "GET",
                        headers:
                        {
                            'content-type': "Apllication/json"
                        }
                    })

                if (response.ok) {
                    const AllItems = await response.json();
                    console.log(AllItems.data, "]]]]]]]]]oopo[[[[[")
                    if (AllItems.data.length > 0) {

                        setAllProduct((prev) => {

                            if (prev !== undefined && prev.length === 0) {
                                console.log(prev, AllItems.data, "///****");

                                return [...prev, AllItems.data]
                            }

                            else if (prev !== undefined && prev.length > 0) {
                                console.log(prev, AllItems.data, "/-------");
                                const check = prev.some((ele) => ele[0].companyName === AllItems.data[0].companyName)
                                if (check) {
                                    return [...prev];
                                } else {
                                    return [...prev, AllItems.data];

                                }
                            }
                        }
                        );
                    }


                }
            })
            console.log(companiesData);

        }

        getAllitems();

    }, [categoryName, companyName])


    console.log(AllProduct, "llllll")

    return AllProduct

}


