import { test,expect,Page,chromium } from "@playwright/test";

import LoginPage from "../../../Pages/BaseClasses/LoginPage";
import Environment from "../../../Pages/BaseClasses/Environment";
import PortalHome from "../../../Pages/ReferralPortal/PortalHome";
import PortalSelectScreen from "../../../Pages/ReferralPortal/PortalSelectScreen";
import AddReferralDetails from "../../../Pages/ReferralPortal/AddReferralDetails";


//import Pool from 'mysql/lib/Pool';

const logindata= JSON.parse(JSON.stringify(require("../../../TestData/ReferralPortal/Login.json")))
const patientdetailsdata=JSON.parse(JSON.stringify(require("../../../TestData/AppointmentDomain/PatientDetails.json")))

test('Add Referral Details @ReferralPortal',async ({page})=>{

    const loginpage=new LoginPage(page)    
    const environment=new Environment(page)
    const portalhome=new PortalHome(page)
    const portalselectscreen=new PortalSelectScreen(page)
    const addreferraldetails=new AddReferralDetails(page)

    

    await page.goto(environment.RefPortal)   
    //await page.pause() 
    await portalhome.clickOnReferralPortalButton()
    await loginpage.enterReferralPortalUserName(logindata.username)    
    await loginpage.enterRefrralPortalPassword(logindata.password);
    await loginpage.clickOnReferralPortalLoginButton()
    await expect(page.getByText('Login success')).toHaveText('Login success')
    await portalselectscreen.clickOnReferralRequestButton()    
        
    //Customizable view
    await addreferraldetails.clickOnSettingButton()
    await addreferraldetails.clickOnCustomizableViewButton()
    
    await page.pause()
    await servicereferralcustom.clickOnSaveButton()
    await expect(page.getByText('Customize view updated successfully')).toHaveText('Customize view updated successfully')
    await servicereferrals.clickOnSettingButton()
    await servicereferrals.clickOnCustomizableViewButton()
    await page.pause()
    await servicereferralcustom.clickOnResetToDefaultViewButton()
    await servicereferralcustom.clickOnOkButton()
    
    await page.pause() 


})

