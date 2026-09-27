
import {test,expect} from '@playwright/test';
import {HomePage} from '../src/pages/HomePage';
import {LoginPage} from '../src/pages/LoginPage';
let loginPage:LoginPage;
let homePage:HomePage;
test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
   await loginPage.goToLoginPage();
   await loginPage.doLogin('pwapril@pw.com', 'pw123');
    homePage = new HomePage(page);
});
test ('homepage title test',async()=>{
   let pageTitle = await homePage.getHomePageTitle();
   console.log('home page title:',pageTitle);
   expect(pageTitle).toBe('My Account');
});
test ('logout link is visible',async()=>{
   expect(await homePage.isLogoutLinkExist()).toBeTruthy();
});
test('home page headers',async()=>{
    let allHeaders=await homePage.getHomePageHeaders();
    console.log('home page headers:',allHeaders);
    expect.soft(allHeaders).toHaveLength(4);
    expect.soft(allHeaders).toEqual(['My Account','My Orders','My Affiliate Account','Newsletter']);
  //sequence also matter

})       
// collect all the spec file in test "npx playwright test" run all parallelly