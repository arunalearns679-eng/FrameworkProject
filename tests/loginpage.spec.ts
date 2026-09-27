
import{test,expect} from '@playwright/test';
import {LoginPage} from '../src/pages/LoginPage';
import {HomePage} from '../src/pages/HomePage';
let loginPage:LoginPage;
let homePage:HomePage;
test.beforeEach(async({page})=>{
    loginPage =new LoginPage(page);
    await loginPage.goToLoginPage();
    homePage=new HomePage(page);
})
test('login page',async()=>{
    
    let title=await loginPage.getLoginPageTitle();
    console.log("login page title is:",title);
    expect(title).toBe('Account Login');
    
});
test('forgotten password link exist',async()=>{
    
    expect (await loginPage.isForgottenPwdLinkExist()).toBeTruthy();
});
test('user is login in app',async()=>{
    
    await loginPage.doLogin('aru_kum@pw.com', 'kumari');
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
});
//AAA  : arrange act assert