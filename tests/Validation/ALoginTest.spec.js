import { test, expect, Page, chromium } from '@playwright/test';
import LoginPage from '../../Pages/BaseClasses/LoginPage';
import Homepage from '../../Pages/BaseClasses/Homepage';
import PatientSearch from '../../Pages/PatientDomain/PatientSearch';
import PatientDetails from '../../Pages/PatientDomain/PatientDetails'
import Environment from '../../Pages/BaseClasses/Environment';
import Menu  from '../../Pages/BaseClasses/Menu';
import PatientWizard from '../../Pages/PatientDomain/PatientWizard';

const logindata= JSON.parse(JSON.stringify(require("../../TestData/PatientDomain/Login.json")))
const patientdetailsdata=JSON.parse(JSON.stringify(require("../../TestData/PatientDomain/PatientDetails.json")))

test.describe.configure({ mode: 'serial' });

test.describe('Patient Domain @Validation', async () => {
  
//   test.beforeEach(async ({page}) => {   
//     const loginpage=new LoginPage(page)
//     const homepage=new Homepage(page)
//     const environment=new Environment(page)   
   
//    await page.goto(environment.Test)  
//    await loginpage.enterUsername(logindata.username)
//    await loginpage.enter_Password(logindata.password)       
//    await loginpage.clickOnLogin()  
//    await homepage.clickOnPatientIcon()
// });


  test('Click on patient module', async ({page}) => {
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page) 
    const menu=new Menu(page)

    await page.goto(environment.Test)  
    await loginpage.enterUsername(logindata.username)
    await loginpage.enter_Password(logindata.password)    
    await loginpage.clickOnLogin()    
    await homepage.clickOnPatientIcon()
    await menu.clickOnMenubtn()
    await menu.clickOnLogout()

  });

  
  test('Login Page_TC_C4_Login_001', async ({page}) => {
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page)

   await page.goto(environment.Test)  
   await loginpage.enterUsername(logindata.username)
   await loginpage.enter_Password(logindata.password)       
   await loginpage.clickOnLogin()     
   await expect(page.getByRole('alert').first()).toBeVisible();
   console.log("Entered Password successfully")   
  });

  test('Verify the webpage title', async ({page}) => {
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page)
   await page.goto(environment.Test)  
   await expect(page).toHaveTitle('Cellma User')    
  });



  test('Login Page_TC_C4_Login_002 ', async ({page}) => {
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page)
       
   await page.goto(environment.Test)  
   await loginpage.enterUsername(logindata.username)
   await loginpage.enter_Password(logindata.Npassword)     
   await page.waitForTimeout(1000)
   await page.locator("xpath=//span[contains(text(),'Please Login Here')]").click()
   await expect(page.locator("xpath=//span[contains(text(),'Please enter valid password')]")).toHaveText('Please enter valid password')   
   
   });

  test.only('TC_C4_Login_003', async ({page}) => {
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page)

   await page.goto(environment.Test)  
   await loginpage.enterUsername(logindata.Nusername)
   await loginpage.enter_Password(logindata.password)    
   await loginpage.clickOnLogin()  
   await page.waitForTimeout(1000)
   await expect(page.getByText('Your username/password combination has not been recognised. Please try again.')).toHaveText('Your username/password combination has not been recognised. Please try again.');
   //await expect(page.locator("xpath=//span[contains(text(),'Please enter valid password')]")).toHaveText('Please enter valid password')
   });

   test('TC_C4_Login_004', async ({page}) => {
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page)

   await page.goto(environment.Test)  
   await loginpage.enterUsername(logindata.Nusername)
   await loginpage.enter_Password(logindata.password)   
   await loginpage.clickOnLogin()  
   await page.waitForTimeout(1000)
   await expect(page.getByText('Your username/password combination has not been recognised. Please try again.')).toHaveText('Your username/password combination has not been recognised. Please try again.');
   //await expect(page.locator("xpath=//span[contains(text(),'Please enter valid password')]")).toHaveText('Please enter valid password')
   });

   test('TC_C4_Login_005', async ({page}) => {
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page)

   await page.goto(environment.Test)        
   await loginpage.enterUsername(logindata.Blankusername)
   await loginpage.enter_Password(logindata.password)    
   await page.waitForTimeout(1000)
   await page.locator("xpath=//span[contains(text(),'Please Login Here')]").click() 
   await expect(page.locator("xpath=//span[contains(text(),'Username required')]")).toHaveText('Username required')
    
   });

   test('TC_C4_Login_006', async ({page}) => {
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page)

   await page.goto(environment.Test)     
   await loginpage.enterUsername(logindata.username)
   await loginpage.enter_Password(logindata.Blankpassword)  
   await page.waitForTimeout(1000)
   await page.locator("xpath=//span[contains(text(),'Please Login Here')]").click()
   await expect(page.locator("xpath=//span[contains(text(),'Password required')]")).toHaveText('Password required')
   //await expect(page.locator("xpath=//span[contains(text(),'Please enter valid password')]")).toHaveText('Please enter valid password')
      
   });

// Forgot Password Link

test('Verify Displayed Forgot Password link', async ({page}) => {
  const loginpage=new LoginPage(page)
  const homepage=new Homepage(page)
  const environment=new Environment(page)
 // await page.pause()
 await page.goto(environment.Test)   
 await loginpage.enterUsername(logindata.username)
 await expect(loginpage.forgotpasswordlink).toBeVisible()  
});

test('Verify click Forgot Password link', async ({page}) => {
  const loginpage=new LoginPage(page)
  const homepage=new Homepage(page)
  const environment=new Environment(page)
 await page.goto(environment.Test)  
 await loginpage.enterUsername(logindata.username)
 await loginpage.forgotpasswordlink.click()
 //await expect(page).toBeVisible(loginpage.emailaddress) 
});

test('Close forgot password Popup', async ({page}) => {
  const loginpage=new LoginPage(page)
  const homepage=new Homepage(page)
  const environment=new Environment(page)
 await page.goto(environment.Test)  
 //await page.pause()
 await loginpage.enterUsername(logindata.username)
 await loginpage.forgotpasswordlink.click()
 await loginpage.closeforgotpasswordpopup.click()
 
});

test('Verify Invalid email Address alert', async ({page}) => {
  const loginpage=new LoginPage(page)
  const homepage=new Homepage(page)
  const environment=new Environment(page)
  
 await page.goto(environment.Test)  
// await page.pause()
 await loginpage.forgotpasswordlink.click()
 await loginpage.enterUsername(logindata.username)
 //await loginpage.enter_InvalidemailAddress(loginpage.InvalidEmailAddress)
 await loginpage.enter_InvalidemailAddress(logindata.InvalidEmailAddress) 
 //await loginpage.closeforgotpasswordpopup.click()
 //await expect(page).toBeVisible(loginpage.emailaddress)
 await page.getByTestId('CommonCellmaPopup').locator('div').filter({ hasText: 'Forgot Password' }).nth(3).click()
 await expect(page.locator("xpath=//span[contains(text(),'Please enter valid email')]")).toHaveText('Please enter valid email') 
});



test('Verify email Address field', async ({page}) => {
  const loginpage=new LoginPage(page)
  const homepage=new Homepage(page)
  const environment=new Environment(page)
 await page.goto(environment.Test)  
 //await page.pause()
 await loginpage.enterUsername(logindata.username)
 await loginpage.forgotpasswordlink.click()
 await loginpage.enter_emailAddress(logindata.EmailAddress)
 await page.locator("xpath=//body/div[2]/div[3]/div[1]/div[2]/form[1]/div[1]").click()
 //await expect(page.locator("xpath=//span[contains(text(),'Please enter valid email')]")).toHaveText('Please enter valid email') 
});

  
});