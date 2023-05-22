 const postrequest = async(url, data) => {
    // const [cookies, setCookie] = useCookies(['user']);
 let message="a";

 let retdata={};
    
        
         await fetch(url, {
                
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(json => {
               
                retdata=json;
                // if(json.status === 'failed'){
                    
                    
                       
                //         throw Error("error");
                      
                    
                   
                    
                // } else if(json.status.toLowerCase() === 'success'){
                //     retdata=json.user
                  
                 
                    

                // } else{
                    
                    
                //     throw Error(JSON.stringify(json));
                // }
            })
            .catch(
            err => {
                
                
                message=err.message
               
                
            
            })
            





return {retdata};

}

export default postrequest;