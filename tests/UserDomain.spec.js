import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/BaseClasses/LoginPage';
import Homepage from '../Pages/BaseClasses/Homepage';
import PatientSearch from '../Pages/PatientDomain/PatientSearch';
import PatientDetails from '../Pages/PatientDomain/PatientDetails'
import UserPage from '../Pages/UserDomain/UserPage';

const logindata= JSON.parse(JSON.stringify(require("../TestData/PatientDomain/Login.json")))
const patientdetailsdata=JSON.parse(JSON.stringify(require("../TestData/PatientDomain/PatientDetails.json")))

test("User Domain",async function({page}){
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const patientsearchpage=new PatientSearch(page)
    const patientdetailspage=new PatientDetails(page)
    const userpage=new UserPage(page)
 
    await loginpage.openUrl()
    await page.pause()
    await loginpage.enterUsername(logindata.username)
    
    await loginpage.enter_Password(logindata.password)
    await loginpage.clickOnLogin()
    await page.waitForTimeout(2000)
    await page.pause()
    //await page.getByRole('option', { aria-activedescendant: 'Active' })
    await page.locator("xpath=//h1[contains(text(),'User')]",{text:'Active'}).click()
    //await page.locator("xpath=//h1[contains(text(),'User')]").click()    
    await userpage.enterUserName()
    await userpage.selectUserStatus()
   // await page.pause()



})
