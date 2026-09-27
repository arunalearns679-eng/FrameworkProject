
import {test,expect} from '../src/fixtures/pagefixtures';


test.beforeEach(async({loginPage})=>{
   await loginPage.goToLoginPage();
   await loginPage.doLogin('aru_kum@pw.com', 'kumari');
   //await loginPage.doLogin(process.env.APPUSERNAME!, process.env.PASSWORD!);

});
test ('homepage title test',async({homePage})=>{
   let pageTitle = await homePage.getHomePageTitle();
   console.log('home page title:',pageTitle);
   expect(pageTitle).toBe('My Account');
});
test ('logout link is visible',async({homePage})=>{
   expect(await homePage.isLogoutLinkExist()).toBeTruthy();
});
test('home page headers',async({homePage})=>{
    let allHeaders=await homePage.getHomePageHeaders();
    console.log('home page headers:',allHeaders);
    expect.soft(allHeaders).toHaveLength(4);
    expect.soft(allHeaders).toEqual(['My Account','My Orders','My Affiliate Account','Newsletter']);
  //sequence also matter

})  
// run all test spec files in test filder use
// npx playwright test   
//only specifis spec file run all the test cases of that file use
// npx playwright test tests/homepagefixture.spec.ts we have to type  