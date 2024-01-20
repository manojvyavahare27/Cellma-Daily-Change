import { test, expect, Page, chromium } from '@playwright/test';
import LoginPage from '../../../Pages/BaseClasses/LoginPage';
import Homepage from '../../../Pages/BaseClasses/Homepage';
import PatientSearch from '../../../Pages/PatientDomain/PatientSearch';
import PatientDetails from '../../../Pages/PatientDomain/PatientDetails'
import Environment from '../../../Pages/BaseClasses/Environment';
import Menu  from '../../../Pages/BaseClasses/Menu';
import PatientWizard from '../../../Pages/PatientDomain/PatientWizard';
import PatientDuplicateCheck from '../../../Pages/PatientDomain/PatientDuplicateCheck';
//import PatientWizard from '../../Pages/PatientWizard';
//import PatientWizard from '../../Pages/PatientWizard';
import AddPatient from '../../../Pages/PatientDomain/AddPatient';
import AddAddress from '../../../Pages/PatientDomain/AddAddress';
import AddPIP from '../../../Pages/PatientDomain/AddPIP';
import ViewPIP from '../../../Pages/PatientDomain/ViewPIP';
import AddGP from '../../../Pages/PatientDomain/AddGP';
import PrintIDCard from '../../../Pages/PatientDomain/PrintIDCard';
import ConfirmExisting from '../../../Pages/PatientDomain/ConfirmExisting';
import TopBlueBar from '../../../Pages/BaseClasses/TopBlueBar';
import EditPatient from '../../../Pages/PatientDomain/EditPatient'
import PatientSideBar from '../../../Pages/PatientDomain/PatientSideBar';
import AddReferral from '../../../Pages/PatientDomain/AddReferral';

const logindata= JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/Login.json")))
const patientdetailsdata=JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/PatientDetails.json")))
const pipdetailsdata=JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/PIPDetails.json")))
const gpdata=JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/NewGPDetails.json")))

test('HomePage Test @Regression', async ({page}) => {
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page) 
    const patientsearch=new PatientSearch(page)
    const patientduplicatecheck=new PatientDuplicateCheck(page)
    const addpatient=new AddPatient(page)
    const addaddress=new AddAddress(page)
    const addpip=new AddPIP(page)
    const viewpip=new ViewPIP(page)
    const addgp=new AddGP(page)
    const printidcard=new PrintIDCard(page)
    const confirmexisting=new ConfirmExisting(page)
    const menu=new Menu(page)
    const topbluebar=new TopBlueBar(page)
    const editpatient=new EditPatient(page)
    const patientsidebar=new PatientSideBar(page)
    const addreferral=new AddReferral(page)

    await page.goto(environment.Test)  
    await loginpage.enterUsername(logindata.username)
    await loginpage.enter_Password(logindata.password)    
    await loginpage.clickOnLogin()    
    //await page.pause()
    //await page.goto('http://10.0.0.63:3000/cellmaUser/home');
    //Click On side Icon On Home page
    await homepage.clickOnSideIconTask()
    await patientsidebar.closePopupOfSidebar()
    await homepage.clickOnSideIconAlerts()
    await patientsidebar.closePopupOfSidebar()
    await homepage.clickOnSideIconMessage()
    await patientsidebar.closePopupOfSidebar()
    await homepage.clickOnSideIconLetters()
    await patientsidebar.closePopupOfSidebar()
    await homepage.clickOnSideIconReferrals()
    await patientsidebar.closePopupOfSidebar()
    //await homepage.clickOnSideIconRejectedReferrals()
   // await patientsidebar.closePopupOfSidebar()

    //Menu Dropdown
    await homepage.clickOnMenu()
    await homepage.clickOnMenuFindPatientLink()
    await patientsearch.clickOnBackbuttonOnPatientSearch()
    await homepage.clickOnMenu()
    await homepage.clickOnMenuDDMyDetails()
    await patientsidebar.closePopupOfSidebar()
    await homepage.clickOnMenu()
    await homepage.clickOnMenuDDMyTask()
    await patientsidebar.closePopupOfSidebar()
    await homepage.clickOnMenu()
    await homepage.clickOnMenuDDMyAlerts()
    await patientsidebar.closePopupOfSidebar()
    await homepage.clickOnMenu()
    await homepage.clickOnMenuDDMyTemplates()
    await patientsidebar.closePopupOfSidebar()
    await homepage.clickOnMenu()
    await homepage.clickOnMenuDDMyPhysicalSigns()
    await patientsidebar.closePopupOfSidebar()
    await homepage.clickOnMenu()
    await homepage.clickOnMenuDDMyAppointments()
    await patientsidebar.closePopupOfSidebar()
    await homepage.clickOnMenu()
    // await homepage.clickOnMenuDDCellmaUserVersion()
    // await page.waitForTimeout(3000)
    // await homepage.closeCellmaVersionPopup()
    // await homepage.clickOnMenu()
    await homepage.clickOnMenuDDLogout()

    //Login again
//     await page.goto(environment.Test)  
//     await loginpage.enterUsername(logindata.username)
//     await loginpage.enter_Password(logindata.password)    
//     await loginpage.clickOnLogin()
//     await homepage.clickOnMenuFindPatientLink()





//     await page.pause()
//     await homepage.clickOnPatientIcon()    
//     await patientsearch.enterGivenName(patientdetailsdata.New_GivenName)
//     await patientsearch.enterFamilyName(patientdetailsdata.New_FamilyName)
//     //await patientsearch.selectSex(patientdetailsdata.SexM)
//     //await page.pause()
//     //await patientsearch.selectBornDate()
//     await patientsearch.clickOnSearchButton()
//     await patientsearch.clickOnSearchPatientLink()
//     //await confirmexisting.clickOnConfirmExistingDetails()
//     await page.pause()
//     //Sidebar Patient
//     await patientsidebar.clickOnCloseMenu()
//     await patientsidebar.clickOnPatientSidebar()
//     await patientsidebar.clickOnInsurancelink()
//     //await patientsidebar.closeInsurancePopup()
//     await patientsidebar.closePopupOfSidebar()
//     await patientsidebar.clickOnDuplicatelinkSidebar()
//     await patientsidebar.closePopupOfSidebar()   
//     await patientsidebar.clickOnGpSidebar()
//     await patientsidebar.clickOnInterestedPartySidebar()
//     await patientsidebar.closePopupOfSidebar()
//     await patientsidebar.clickOnPatientSidebar()
//     // await patientsidebar.clickOnLabellink()
//     // window.stop()

//     //Sidebar Consent
//    // await page.pause()
//     await patientsidebar.clickOnconsentSidebar()
//     await patientsidebar.clickOnAddConsentlink()
//     await patientsidebar.closePopupOfSidebar()
//     await patientsidebar.clickOnViewConsentlink()
//     await patientsidebar.closePopupOfSidebar()
//     await patientsidebar.clickOnconsentSidebar()
//     //await page.pause()

//     //sidebar Appointment
//     await patientsidebar.clickOnAppointmentlink()
//     await patientsidebar.clickOnAddAppointmentlink()
//     await patientsidebar.closePopupOfSidebar()
//     await patientsidebar.clickOnViewAppointmentlink()
//     await patientsidebar.closePopupOfSidebar()
//     await patientsidebar.clickOnAppointmentlink()
//     //await page.pause()

//     //Sidebar Referral
//     await patientsidebar.clickOnreferrallink()
//     await patientsidebar.clickOnAddReferralLink()
//     await addreferral.clickOnAddReferralBackButton()
//     await addreferral.clickOnAddReferralBackButton()
//     await patientsidebar.clickOnreferrallink()
//     // await patientsidebar.closePopupOfSidebar()
//     await patientsidebar.clickOnViewReferralLink()
//     await patientsidebar.closePopupOfSidebar()
//     await patientsidebar.clickOnreferrallink()
//     await page.pause()



//     await page.pause()
//     await topbluebar.clickOnTopBlueBar()    
//     await page.waitForTimeout(3000)
//     //await editpatient.clickOnPatientDetails()
//     //  await editpatient.clickOnPatientAddress() 
//     // await editpatient.clickOnPatientDetails()
//     await page.pause()   
    
//     await editpatient.selectSexualOrientation()
//     await editpatient.selectCurrentlyPrgenant()
//     //await editpatient.selectSexDropdown()
//     await editpatient.selectEthnicityDropdown()
//     await editpatient.selectReligionDropdown()
//     //await editpatient.selectPrimaryDisablity()
//     await editpatient.selectPrisoner()
    
//     await editpatient.clickOnSaveForPatientDetails()
//     await expect(page.getByText('Patient updated successfully')).toHaveText('Patient updated successfully')
//     //await page.pause()
//     await editpatient.clickOnPatientAddress()   
//     await editpatient.clickOnSaveForPatientDetails() 
//     await expect(page.getByText('Patient address added successfully')).toHaveText('Patient address added successfully')
//     await editpatient.clickOnPatientPIP()    
//     await editpatient.clickOnViewPIPLink()
//     await page.waitForTimeout(2000)
//     await editpatient.clickOnClosePIPAddressPopup() 
//     await editpatient.clickOnExportListbtn()    
//     await editpatient.clickOnViewforInterestedPartyList()
//     await page.waitForTimeout(2000)
//     await editpatient.clickOnAddressPIP()
//     //await page.pause()
//     await editpatient.clickOnExportToCSVLink()
//     await page.waitForTimeout(1000)
//     await editpatient.clickOnExportToExcelLink()
//     await page.waitForTimeout(1000)
//     await editpatient.clickOnExportToXMLLink()
//     await page.waitForTimeout(1000)
//     await editpatient.clickOnExportToPDFLink()
//     await page.waitForTimeout(1000)
//     await editpatient.clickOnCloseInterestedPartyPopup()
    


//     await editpatient.clickOnPatientGP()
    
//     await editpatient.clickOnPrintIdCard()
    
    //await page.pause()



})
