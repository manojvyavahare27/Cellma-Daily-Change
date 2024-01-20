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



  test.beforeEach(async ({page}) => {   
     const loginpage=new LoginPage(page)
     const homepage=new Homepage(page)
     const environment=new Environment(page)
    //const patientsearch=new PatientSearch(page)
    
    await page.goto(environment.Test)  
    await loginpage.enterUsername(logindata.username)
    await loginpage.enter_Password(logindata.password)       
    await loginpage.clickOnLogin()  
    await homepage.clickOnPatientIcon()
});

  //Verify MPI Number
  test('Verify Valid MPI Number', async ({page}) => { 

    const patientsearch=new PatientSearch(page)          
    //await page.pause()
    await patientsearch.enterMPINumber(patientdetailsdata.ValidMPINumber) 
    await patientsearch.clickOnSearchButton()
    await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')       
    });

    test('Verify Invalid MPI Number', async ({page}) => { 
      const patientsearch=new PatientSearch(page)          
      //await page.pause()
      await patientsearch.enterMPINumber(patientdetailsdata.InvalidMPINumber)      
      await patientsearch.clickOnSearchButton()
      await expect(page.getByRole('alert').getByText('No patient found')).toHaveText('No patient found')   
      
      });

     //Verify Barcode
  test('Verify valid Barcode', async ({page}) => { 
    const patientsearch=new PatientSearch(page)  
    await patientsearch.enterBarcode(patientdetailsdata.validbarcode)     
    await patientsearch.clickOnSearchButton()
    await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')       
    });

  test('Verify Invalid Barcode', async ({page}) => { 
    const patientsearch=new PatientSearch(page)    
    await patientsearch.enterBarcode(patientdetailsdata.InvalidBarcode)     
    await patientsearch.clickOnSearchButton()   
    await expect(page.getByRole('alert').getByText('No patient found')).toHaveText('No patient found')   
    });

      //verify GivenName
    test('Verify valid GivenName', async ({page}) => { 
      const patientsearch=new PatientSearch(page)     
      await patientsearch.enterGivenName(patientdetailsdata.validgivenname) 
      
      await patientsearch.clickOnSearchButton()   
      await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')   
      });
     
    test('Verify Invalid GivenName', async ({page}) => {
        const patientsearch=new PatientSearch(page)         
        await patientsearch.enterGivenName(patientdetailsdata.invalidgivenname)         
        await patientsearch.clickOnSearchButton()   
        await expect(page.getByRole('alert').getByText('No patient found')).toHaveText('No patient found')   
      });

        //Verify FamilyName
    test('Verify valid familyName', async ({page}) => {
          const patientsearch=new PatientSearch(page) 
          //await page.pause()
          await patientsearch.enterFamilyName(patientdetailsdata.validfamilyname)  
          await patientsearch.clickOnSearchButton()   
          await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')   
          });

      test('Verify Invalid familyName', async ({page}) => { 
          const patientsearch=new PatientSearch(page) 
          //await page.pause()
          await patientsearch.enterFamilyName(patientdetailsdata.invalidfamilyname)  
          await patientsearch.clickOnSearchButton()   
          await expect(page.getByRole('alert').getByText('No patient found')).toHaveText('No patient found')   
          });

       //Verify HospitalRef         
      test('Verify valid HospitalRef', async ({page}) => {
        const patientsearch=new PatientSearch(page) 
        //await page.pause()
        await patientsearch.enterHospitalRef(patientdetailsdata.ValidHospitalRef)  
        await patientsearch.clickOnSearchButton()   
        await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')   
        });

      test('Verify Invalid HospitalRef', async ({page}) => { 
          const patientsearch=new PatientSearch(page) 
         // await page.pause()
          await patientsearch.enterHospitalRef(patientdetailsdata.InValidHospitalRef)  
          await patientsearch.clickOnSearchButton()   
          await expect(page.getByRole('alert').getByText('No patient found')).toHaveText('No patient found')   
        });

        //Verify Sex
        test('Verify Sex Dropdown', async ({page}) => { 
          const patientsearch=new PatientSearch(page)          
          await patientsearch.selectSex(patientdetailsdata.SexM)  
          await patientsearch.clickOnSearchButton()   
          await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')   
        });

       //Verify Born Date
       test('Verify Born date', async ({page}) => { 
        const patientsearch=new PatientSearch(page)         
        await page.getByRole('button', { name: 'Choose date' }).click();
        page.once('dialog', dialog => {
        expect(dialog.message()).toContain('The patient you are attempting to register is below the age of 18.')
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
        });
        await page.getByRole('button', { name: 'May 1, 2023' }).click();
        });

       //Verify Mobile
       test('Verify Valid Mobile', async ({page}) => {
        const patientsearch=new PatientSearch(page)        
        await patientsearch.enterMobileNumber(patientdetailsdata.MobileNumber) 
        await patientsearch.clickOnSearchButton()   
        await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')   
        });
       
        //Invalid Mobile Number
        test('Verify Invalid Mobile', async ({page}) => {
          const patientsearch=new PatientSearch(page)        
          await patientsearch.enterMobileNumber(patientdetailsdata.InvalidMobileNumber)  
          page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
          await patientsearch.clickOnSearchButton()   
          await expect(page.getByRole('alert').getByText('No patient found')).toHaveText('No patient found')   
          });

        //Verify Postcode
       test('Verify Valid Postcode', async ({page}) => {
        const patientsearch=new PatientSearch(page)        
        await patientsearch.enterPostcode(patientdetailsdata.ValidPostcode)  
        await patientsearch.clickOnSearchButton()   
        await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')   
        });
       
        //Invalid Postcode
        test('Verify Invalid Postcode', async ({page}) => {
          const patientsearch=new PatientSearch(page)        
          await patientsearch.enterPostcode(patientdetailsdata.InvalidPostcode)  
          await patientsearch.clickOnSearchButton()   
          await expect(page.getByRole('alert').getByText('No patient found')).toHaveText('No patient found')   
          });

       //Verify valid MRN Number
       test('Verify Valid MRN Number', async ({page}) => {
        const patientsearch=new PatientSearch(page)        
        await patientsearch.enterMRNNumber(patientdetailsdata.ValidMRNNumber)  
        await patientsearch.clickOnSearchButton()   
        await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')   
        });

        //Verify Invalid MRN Number
       test('Verify InValid MRN Number', async ({page}) => {
        const patientsearch=new PatientSearch(page)                
        await patientsearch.enterMRNNumber(patientdetailsdata.InvalidMRNNumber)  
        await patientsearch.clickOnSearchButton()   
        await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')   
        });

        //Verify valid Identification ID
       test('Verify valid Identification ID', async ({page}) => {
        const patientsearch=new PatientSearch(page)        
        
        await patientsearch.enterIdentificationId(patientdetailsdata.ValidIdentificationID)  
        await patientsearch.clickOnSearchButton()   
        await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')   
        });

        //Verify Invalid Identification ID
       test('Verify InValid Identification ID', async ({page}) => {
        const patientsearch=new PatientSearch(page)        
        //await page.pause()
        await patientsearch.enterIdentificationId(patientdetailsdata.InvalidIdentificationId)  
        await patientsearch.clickOnSearchButton()   
        //await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')   
        await expect(page.getByRole('alert').getByText('No patient found')).toHaveText('No patient found')   
        });


        //Verify valid name is other language
       test.skip('Verify valid name is other language', async ({page}) => {
        const patientsearch=new PatientSearch(page)        
        await patientsearch.enterNameInOtherLanguage(patientdetailsdata.ValidNameinOtherlang)  
        await patientsearch.clickOnSearchButton()   
        await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')   
        });

        //Verify Invalid name is other language
       test.skip('Verify Invalid name is other language', async ({page}) => {
        const patientsearch=new PatientSearch(page)        
        await patientsearch.enterNameInOtherLanguage(patientdetailsdata.InvalidNameinOtherlang)  
        await patientsearch.clickOnSearchButton()   
        await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')   
        });

        //Patient seen in Last days
        test('Verify Patient seen in last days', async ({page}) => { 
          const patientsearch=new PatientSearch(page) 
         //await page.pause()
          await patientsearch.selectPatientSeenInLastDays()  
          await patientsearch.clickOnSearchButton()   
          await expect(page.locator("xpath=//div[contains(text(),'Patient List Found')]")).toHaveText('Patient List Found')   
        });

        //verify Search List button
        test('Verify search Button', async ({page}) => {            
          const patientsearch=new PatientSearch(page)          
         await patientsearch.enterFamilyName(patientdetailsdata.validfamilyname) 
         await patientsearch.clickOnSearchButton()          
          await expect(patientsearch.btn_Search).toBeVisible(true)   
        });

        //verify Export List button
        test('Verify Export List Button', async ({page}) => {
           
          const patientsearch=new PatientSearch(page) 
        // await page.pause()
         await patientsearch.enterFamilyName(patientdetailsdata.validfamilyname) 
         await patientsearch.clickOnSearchButton()
          await patientsearch.clickOnExportListButton()  
          //await patientsearch.clickOnSearchButton()   
          await expect(patientsearch.btnExportList).toBeVisible(true)   
        });

        //verify Add Patient button button
        test('Verify Add Patient Button', async ({page}) => {            
          const patientsearch=new PatientSearch(page)          
         await patientsearch.enterFamilyName(patientdetailsdata.validfamilyname) 
         await patientsearch.clickOnSearchButton()          
          await expect(patientsearch.btn_AddPatient).toBeVisible(true)   
        });


  test.skip('Verify Patient Icon', async ({page}) => {
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


// });