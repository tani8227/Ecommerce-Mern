

export default function useSearchQuery() {
    
     
   

        async function handelSearchQuery(query) {
            
            
            
            
            const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL||process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL}/api/v1/user/searchQuery/?query=${query}`,
                {
                    method: 'GET',
                    headers:
                    {
                        "Content-Type": "application/json",
                        
                    },
                    
                });
                
                if (response.ok)
                     {
                    const data = await response.json();
                    if (data) 
                        {
                         return data
                        }
                }
                else {
                    
                    console.log("jjjjjjjjjopop[][][][[[[", response);
                }
                
            }
            return handelSearchQuery;
            


}
