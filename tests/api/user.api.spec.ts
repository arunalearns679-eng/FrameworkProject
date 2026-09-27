
import { test, expect } from '../../src/fixtures/apifixtures';

// Read the TOKEN from environment — TS will now pick up Node types
const TOKEN = process.env.API_TOKEN;
let AUTH_HEADER={
    Authorization: `Bearer ${TOKEN}`
};
let userId: number;
test.describe.serial('running e2e go rest crud apis tests',()=>{



test('get api-get all users', async ({apiHelper}) => {
	let response= await apiHelper.get('/public/v2/users', AUTH_HEADER);
    expect( response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
});
test('post api-get all users', async ({apiHelper}) => {
	
    let userData={
        name:'manish',
        email:`pwautomation_${Date.now()}@open.com`,
        gender:'male',
        status:'valid'
    };
    let response= await apiHelper.post('/public/v2/users',userData, AUTH_HEADER);
    expect( response.status).toBe(201);
   userId= response.body.id;
   console.log('create user id',userId);
});

test('put api-get all users', async ({apiHelper}) => {
	
    let userData={
        name:'manish updated',
       //email:`pwautomation_${Date.now()}@open.com`,
       // gender:'male',
        status:'inactive'
    };
    let response= await apiHelper.put(`/public/v2/users/${userId}`,userData, AUTH_HEADER);
    expect( response.status).toBe(200);
   expect(response.body.name).toBe(userData.name);
   expect(response.body.status).toBe(userData.status);
});
test('delete api-get all users', async ({apiHelper}) => {
	
    
    let response= await apiHelper.delete(`/public/v2/users/${userId}`, AUTH_HEADER);
    expect( response.status).toBe(204);

   
});
})