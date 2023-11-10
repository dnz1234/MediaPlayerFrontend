import axios from "axios"



export const commonAPI=async (httpMethod,url,reqBody)=>{
    let reqConfig= {
        
              method: httpMethod,
              url:url,  //// same name anakil short otaaathavanaa mathii
              data: reqBody,
              Headers:{
                "Content-Type":"application/json"
              }
       
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}