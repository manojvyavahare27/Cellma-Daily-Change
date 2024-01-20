import { test, expect, Page, chromium } from '@playwright/test';
import LoginPage from '../../Pages/BaseClasses/LoginPage';
import Homepage from '../../Pages/BaseClasses/Homepage';
import Environment from '../../Pages/BaseClasses/Environment';
import Menu  from '../../Pages/BaseClasses/Menu';


const logindata= JSON.parse(JSON.stringify(require("../../TestData/PatientDomain/Login.json")))
const patientdetailsdata=JSON.parse(JSON.stringify(require("../../TestData/PatientDomain/PatientDetails.json")))

test.describe.configure({ mode: 'serial' });

test.describe('Home Page @Validation', async () => {
  
  test('Verify Patient Icon', async ({page}) => {
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page) 
    const menu=new Menu(page)

    await page.goto(environment.Test)  
    await loginpage.enterUsername(logindata.username)
    await loginpage.enter_Password(logindata.password)    
    await loginpage.clickOnLogin()    
    await homepage.clickOnPatientIcon()
    await expect(page).toHaveURL("http://10.0.0.63:3000/cellmaUser/patient/patientSearch")
    await menu.clickOnMenubtn()
    await menu.clickOnLogout()  
  });


});