
export default function HandleDelete()
{
                async  function handleDeleteProduct(modalName, itemId)
                  {

                    console.log(modalName, itemId)
                     const response= await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/product/delete/?modalName=${modalName}&itemId=${itemId}`,
                        {
                            method:'DELETE',
                            headers:
                            {
                                'Content-Type':'Application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                            }
                        }
                    )

                        if(response.ok)
                            {
                                const data= await response.json();
                                if(data)
                                    {
                                       return data.message
                                    }
                            }
                  }

                  return handleDeleteProduct;
}