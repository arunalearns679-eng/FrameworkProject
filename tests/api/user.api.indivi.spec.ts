
import { test, expect } from '../../src/fixtures/apifixtures';

// Read the TOKEN from environment — TS will now pick up Node types
const TOKEN = process.env.API_TOKEN;
let AUTH_HEADER={
    Authorization: `Bearer ${TOKEN}`
};
async function createUser(apiHelper:any){
    let userData={
            name:'manish',
            email:`pwautomation_${Date.now()}@open.com`,
            gender:'male',
            status:'valid'
        };
        let response= await apiHelper.post('/public/v2/users',userData, AUTH_HEADER);
        expect( response.status).toBe(201);
        return response.body;
}
test('create ')