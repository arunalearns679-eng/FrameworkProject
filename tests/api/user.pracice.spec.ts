
import{test,expect} from '@playwright/test';
let AUTH_TOKEN={
    Authorization: 'Bearer eb2145f8909aa3996251d4d57968525c045dfa4e4b9a1c37938184fbe76a4579'
};
test('get user api test',async({request})=>{

   let response= await request.get('https://gorest.co.in/public/v2/users',{headers:AUTH_TOKEN});
   let jsonBody=await response.json();
   console.log(jsonBody);
   console.log(response.status());  //200
   console.log(response.statusText()); //ok
   expect(response.status()).toBe(200);
});
test('create post api',async({request})=>{
    let userData={
        name:'maneesh',
        //fresh email id every time so that 422 error gone
        //email:`pwautomation_${Date.now()}@gmail.com`,
        email:'aru123456@gmail.com',
        gender:'male',
        status:'active'
    }
    let response=await request.post('https://gorest.co.in/public/v2/users',{
        headers:AUTH_TOKEN, 
        data:userData
    });
    let jsonBody=await response.json();
    console.log(jsonBody);
    console.log(response.status());  //201
    console.log(response.statusText()); //Created
    expect(response.status()).toBe(201);
})
test('update user api',async({request})=>{
    let userData={
        name:'maneesh kumar',
        email:'arunakum1234@gmail.com',
        gender:'male',
        status:'inactive'
    }
    let response=await request.put('https://gorest.co.in/public/v2/users/8625610',{headers:AUTH_TOKEN, data:userData});
    let jsonBody=await response.json();
    console.log(jsonBody);
    console.log(response.status());  //200
    console.log(response.statusText()); //OK
    expect(response.status()).toBe(200);
})
test('delete api',async({request})=>{
    let response=await request.delete('https://gorest.co.in/public/v2/users/8625610',{headers:AUTH_TOKEN});
    console.log(response.status());  //204
    console.log(response.statusText()); // no content
    expect(response.status()).toBe(204);
})
//this is not right way of designing the framework just practice so should create one helperfile uwith that 
// we have to create 5 method those are generic methods which can use any api's(get,put call...)and

//that helpers we will supply with the help of fixtures