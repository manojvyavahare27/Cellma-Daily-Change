import { test, expect, Page, chromium } from '@playwright/test';
import LoginPage from '../../Pages/BaseClasses/LoginPage';
import Homepage from '../../Pages/BaseClasses/Homepage';
import PatientSearch from '../../Pages/PatientDomain/PatientSearch';
import PatientDetails from '../../Pages/PatientDomain/PatientDetails'
import Environment from '../../Pages/BaseClasses/Environment';
import Menu  from '../../Pages/BaseClasses/Menu';
import PatientWizard from '../../Pages/PatientDomain/PatientWizard';
import PatientDuplicateCheck from '../../Pages/PatientDomain/PatientDuplicateCheck'
import ConfirmExisting from '../../Pages/PatientDomain/ConfirmExisting'

const logindata= JSON.parse(JSON.stringify(require("../../TestData/PatientDomain/Login.json")))
const patientdetailsdata=JSON.parse(JSON.stringify(require("../../TestData/PatientDomain/PatientDetails.json")))

test.beforeEach(async ({page}) => {   
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page)  
    const patientsearch=new PatientSearch(page)    
    const patientduplicatecheck=new PatientDuplicateCheck(page) 
    const confirmexisting=new ConfirmExisting(page)
    
   await page.goto(environment.Test)  
   await loginpage.enterUsername(logindata.username)
   await loginpage.enter_Password(logindata.password)       
   await loginpage.clickOnLogin()  
   await homepage.clickOnPatientIcon()
   await patientsearch.enterGivenName(patientdetailsdata.New_GivenName)
   await patientsearch.enterFamilyName(patientdetailsdata.New_FamilyName)
   //await page.pause()
   await patientsearch.clickOnSearchButton()
   await patientsearch.clickOnSearchPatientLink()  
   await patientsearch.ClickOnYesConfirmLegitimateRelationship()
   await page.waitForTimeout(4000)
});

//Verify Also Known As
test('Verify Also Known As @Validation', async ({page}) => {       
     const confirmexisting=new ConfirmExisting(page) 
     const TextVal = await confirmexisting.checktxtAlsoKnownAs()     
     expect(await TextVal).toBe('Cellma')           
  });

  //Verify Interpreter required
// test('Verify Interpreter required', async ({page}) => {       
//     const confirmexisting=new ConfirmExisting(page)      
//     await page.waitForTimeout(4000)
//     const TextVal = await confirmexisting.extractSelectedDisplayedValue()  
//     //expect(await extractSelectedDisplayedValue(selectedImageOption)).toBe('Option 1 '); 
//     await expect(TextVal).toHaveText('Yes');  
//     //expect(await TextVal).toBe('No')           
//  });

//Verify Email Id
test('Verify Email Id @Validation', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtEmailId()     
    expect(await TextVal).toBe('manoj.vyavahare@riomed.com')           
 });

 //Verify Mobile No
test('Verify Mobile Number', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtMobileNo()   
    expect(await TextVal).toBe('9762713711')           
 });

 //Verify Phone No
test('Verify Phone Number', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtPhoneNo()     
    expect(await TextVal).toBe('8065432165')           
 });

 //Verify Given Name
test('Verify Given Name', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtGivenName()     
    expect(await TextVal).toBe('TestNG')           
 });

  //Verify Family Name
test('Verify Family Name', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtFamilyName()     
    expect(await TextVal).toBe('Riomedtests')           
 });

 //Verify Kin Email Id
test('Verify Kin Email Id', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtKinEmailId()     
    expect(await TextVal).toBe('Example@gmail.com')           
 });

 //Verify Kin Mobile
test('Verify Kin Mobile', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtKinMobile()     
    expect(await TextVal).toBe('9890098900')           
 });

 //Verify Kin Phone
test('Verify Kin Phone', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtKinPhone()     
    expect(await TextVal).toBe('654321654')           
 });

 //Verify Address Company Name
// test('Verify Address Company Name', async ({page}) => {       
//     const confirmexisting=new ConfirmExisting(page)      
//     const TextVal = await confirmexisting.checktxtAddCompanyName()     
//     expect(await TextVal).toBe('Riomed UK')           
//  });

 //Verify Number & Road
test('Verify Number & Road', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtnumberAndRoad()     
    expect(await TextVal).toBe('Riomed UK, FC Road')           
 });

 //Verify PostCode
test('Verify Postcode', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtPostCode()     
    expect(await TextVal).toBe('411000')           
 });

 //Verify Temp Contact Details Email
test('Verify Temp Contact Details Email', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtTCDEmailId()     
    expect(await TextVal).toBe('manoj.vyavahare@riomed.com')           
 });

 //Verify Temp Contact Details Mobile
test('Verify Temp Contact Details Mobile', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtTCDMobile()     
    expect(await TextVal).toBe('9890098920')           
 });

 //Verify Temp Contact Details Phone
test('Verify Temp Contact Details Phone', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtTCDPhone()     
    expect(await TextVal).toBe('9762713710')           
 });

 //Verify Temp Contact Details Start Date
test('Verify Temp Contact Details Start Date', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtTCDStartDate()     
    expect(await TextVal).toBe('01/04/2023')           
 });

 //Verify Temp Contact Details End Date
test('Verify Temp Contact Details End Date', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtTCDEndDate()     
    expect(await TextVal).toBe('30/04/2023')           
 });

 //Verify Temp Address Number & Road
test('Verify Temp Address Number & Road', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    const TextVal = await confirmexisting.checktxtTempAddNoNRoad()     
    expect(await TextVal).toBe('Riomed UK, FC Road')           
 });



 //Verify Temp Address PostCode
// test('Verify Temp Address Postcode', async ({page}) => {       
//     const confirmexisting=new ConfirmExisting(page)      
//     const TextVal = await confirmexisting.checktxtTempPostCode()     
//     expect(await TextVal).toBe('411002')           
//  });



 // Verify confirm Existing Details button
 test('Verify confirm Existing Details button', async ({page}) => {       
    const confirmexisting=new ConfirmExisting(page)      
    await confirmexisting.clickOnConfirmExistingDetails()          
    await expect(confirmexisting.btn_confirmExistingDetails).toBeEnabled(false)       
 });

//  test('Verify Save Change Details', async ({page}) => {       
//    const confirmexisting=new ConfirmExisting(page)  
//    await page.pause()
//    //await confirmexisting.checktxtAddCompanyName()   
//    await confirmexisting.clickOnSaveChangeDetails()          
//    //await expect(confirmexisting.btn_confirmExistingDetails).toBeVisible(true)       
// });


 







