import { test, expect, Page, chromium } from '@playwright/test';
import LoginPage from '../../Pages/BaseClasses/LoginPage';
import Homepage from '../../Pages/BaseClasses/Homepage';
import PatientSearch from '../../Pages/PatientDomain/PatientSearch';
import PatientDetails from '../../Pages/PatientDomain/PatientDetails'
import Environment from '../../Pages/BaseClasses/Environment';
import Menu  from '../../Pages/BaseClasses/Menu';
import PatientWizard from '../../Pages/PatientDomain/PatientWizard';
import PatientDuplicateCheck from '../../Pages/PatientDomain/PatientDuplicateCheck'

const logindata= JSON.parse(JSON.stringify(require("../../TestData/PatientDomain/Login.json")))
const patientdetailsdata=JSON.parse(JSON.stringify(require("../../TestData/PatientDomain/PatientDetails.json")))

test.beforeEach(async ({page}) => {   
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page)  
    const patientsearch=new PatientSearch(page)    
    const patientduplicatecheck=new PatientDuplicateCheck(page) 
   //const patientsearch=new PatientSearch(page)   
   await page.goto(environment.Test)  
   await loginpage.enterUsername(logindata.username)
   await loginpage.enter_Password(logindata.password)       
   await loginpage.clickOnLogin()  
   await homepage.clickOnPatientIcon()
   await patientsearch.enterGivenName(patientdetailsdata.New_GivenName)
   await patientsearch.enterFamilyName(patientdetailsdata.New_FamilyName)
   await patientsearch.selectSex(patientdetailsdata.SexM)
   await patientsearch.selectBornDate()
   await patientsearch.clickOnSearchButton()
   await patientsearch.clickOnAddPatientbnt()
//    await patientduplicatecheck.selectPhotoIdentification(patientdetailsdata.Photo_Identification)
//    await patientduplicatecheck.enterPhotoIdentification(patientdetailsdata.Photo_Identification_ID)
//    await patientduplicatecheck.enterMiddleName(patientdetailsdata.MiddleName)
//    await patientduplicatecheck.selectIsBabyBornInHospital()
});

//Verify Identifier 
test('Verify Identifier', async ({page}) => {       
   const patientduplicatecheck=new PatientDuplicateCheck(page)  
   await patientduplicatecheck.selectPhotoIdentification(patientdetailsdata.Photo_Identification)
   await patientduplicatecheck.enterPhotoIdentification(patientdetailsdata.Photo_Identification_ID)
   await patientduplicatecheck.enterMiddleName(patientdetailsdata.MiddleName)
   await patientduplicatecheck.selectIsBabyBornInHospital()
   await page.pause()
   await patientduplicatecheck.enterIdentifier(patientdetailsdata.Identifier) 
   await patientduplicatecheck.clickOnDuplicateCheckButton()
   await expect(page.getByText('Duplicate Patients not found')).toHaveText('Duplicate Patients not found')       
 });

//Verify Unique Identification
test('Verify Unique Identification Dropdown', async ({page}) => { 
  const patientduplicatecheck=new PatientDuplicateCheck(page)  
  await patientduplicatecheck.selectPhotoIdentification(patientdetailsdata.Photo_Identification)
  await patientduplicatecheck.enterPhotoIdentification(patientdetailsdata.Photo_Identification_ID)
  await patientduplicatecheck.enterMiddleName(patientdetailsdata.MiddleName)
  await patientduplicatecheck.selectIsBabyBornInHospital()
  await page.pause()
    await patientduplicatecheck.selectUniqueIdentification(patientdetailsdata.Unique_Identification) 
    await patientduplicatecheck.enterUniqueIdentificationId(patientdetailsdata.Unique_Identification_Id) 
    await patientduplicatecheck.clickOnDuplicateCheckButton()   
    await expect(page.getByText('Duplicate Patients not found')).toHaveText('Duplicate Patients not found')   
  }); 

//Verify Valid Photo Identification
test('Verify Valid Photo Identification Dropdown', async ({page}) => { 
  const patientduplicatecheck=new PatientDuplicateCheck(page)  
  await patientduplicatecheck.selectPhotoIdentification(patientdetailsdata.Photo_Identification)
  await patientduplicatecheck.enterPhotoIdentification(patientdetailsdata.ValidPhoto_Identification_ID)
  await patientduplicatecheck.enterMiddleName(patientdetailsdata.MiddleName)
  await page.pause()
  await patientduplicatecheck.selectIsBabyBornInHospital()   
  await patientduplicatecheck.clickOnDuplicateCheckButton()   
  await expect(page.getByText('Duplicate Patients found')).toHaveText('Duplicate Patients found')   
  });     

//Verify Invalid Photo Identification
// test('Verify Invalid Photo Identification Dropdown', async ({page}) => { 
//   const patientduplicatecheck=new PatientDuplicateCheck(page)  
//   await patientduplicatecheck.selectPhotoIdentification(patientdetailsdata.Photo_Identification)
//   await patientduplicatecheck.enterPhotoIdentification(patientdetailsdata.InvalidPhoto_Identification_ID)
//   await patientduplicatecheck.enterMiddleName(patientdetailsdata.MiddleName)
//   await patientduplicatecheck.selectIsBabyBornInHospital()   
//   await page.pause()
//   await patientduplicatecheck.clickOnDuplicateCheckButton()   
//   await expect(page.getByText('Duplicate Patients not found')).toHaveText('Duplicate Patients not found')   
//   });    


//Verify Issuing Country
test('Verify Issuing Country Dropdown', async ({page}) => { 
  const patientduplicatecheck=new PatientDuplicateCheck(page)  
  await patientduplicatecheck.selectPhotoIdentification(patientdetailsdata.Photo_Identification)
  await patientduplicatecheck.enterPhotoIdentification(patientdetailsdata.ValidPhoto_Identification_ID)
  await patientduplicatecheck.enterMiddleName(patientdetailsdata.MiddleName)  
  await patientduplicatecheck.selectIsBabyBornInHospital()   
  await patientduplicatecheck.selectIssuingCountry()
  await page.pause()
  await patientduplicatecheck.clickOnDuplicateCheckButton()   
  await expect(page.getByText('Duplicate Patients found')).toHaveText('Duplicate Patients found')   
  });     
  