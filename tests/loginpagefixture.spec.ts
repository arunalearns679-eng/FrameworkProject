//import process from 'process';
import { test, expect } from '../src/fixtures/pagefixtures';
//import { LoginPage } from '../src/pages/LoginPage';


test.beforeEach(async ({ loginPage }) => {
  await loginPage.goToLoginPage();
});
test('loginpage title',async({loginPage})=>{

let pageTitle=await loginPage.getLoginPageTitle();
console.log('login page title',pageTitle);
expect(pageTitle).toBe('Account Login');
      
})
test('forgotten pwd',async({loginPage})=>{

expect(await loginPage.isForgottenPwdLinkExist()).toBeTruthy();
      
});
test('user able to login',async({loginPage,homePage})=>{
  await loginPage.doLogin('aru_kum@pw.com', 'kumari');

//await loginPage.doLogin(process.env.APPUSERNAME, process.env.PASSWORD);
expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
      
})


