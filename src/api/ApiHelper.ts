

import {APIRequestContext} from "@playwright/test";
// 4 imp methods i have to create

export class ApiHelper {
    private readonly request: APIRequestContext;
    private readonly baseURL: string; //every api has base url so we can create a variable and store the base url in that variable
    constructor(request: APIRequestContext, baseURL: string) {
        this.request=request;
        this.baseURL=baseURL;
    }
    //get call create a generic method which can use any api's
    async get(endPoint: string, apiheader?: Record<string, string>){ //record used to store key and value pair data
        let response= await this.request.get(`${this.baseURL}${endPoint}`,{
            headers: apiheader
        });
               console.log(await response.json(), response.status());
               return {
                status: response.status(),
                body: await response.json()
               }
    }

// post call
async post(endPoint: string, data: object, apiheader?: Record<string, string>){ //record used to store key and value pair data
        let response=await this.request.post(`${this.baseURL}${endPoint}`,{
            headers: apiheader,
            data: data
        });
              console.log(await response.json(), response.status());
               return {
                status:response.status(),
                body: await response.json()
               }
    }
   // put call
   async put(endPoint: string, data: object, apiheader?: Record<string, string>){ //record used to store key and value pair data
        let response=await this.request.put(`${this.baseURL}${endPoint}`,{
            headers: apiheader,
            data: data
        });
                  console.log(await response.json(), response.status());
               return {
                status:response.status(),
                body: await response.json()
               }
    }

//delete api
async delete(endPoint: string, apiheader?: Record<string, string>){ //record used to store key and value pair data
        let response= await this.request.get(`${this.baseURL}${endPoint}`,{
            headers: apiheader
        });
                console.log( response.status());
               return {
                status:response.status(),
               //body:await response.json()
               }
    }
}

//these mthods should be access by any test methods we have to supply via custom fixtures







