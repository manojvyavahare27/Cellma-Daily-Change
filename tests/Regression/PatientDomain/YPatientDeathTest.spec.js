import { test, expect, Page, chromium } from '@playwright/test';
import LoginPage from '../../../Pages/BaseClasses/LoginPage';
import Homepage from '../../../Pages/BaseClasses/Homepage';
import PatientSearch from '../../../Pages/PatientDomain/PatientSearch';
import PatientDetails from '../../../Pages/PatientDomain/PatientDetails'
import Environment from '../../../Pages/BaseClasses/Environment';
import AddReferral from '../../../Pages/PatientDomain/AddReferral';
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
import EditPatient from '../../../Pages/PatientDomain/EditPatient';
import PatientDeath from '../../../Pages/PatientDomain/PatientDeath';

const logindata= JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/Login.json")))
const patientdetailsdata=JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/PatientDetails.json")))
const pipdetailsdata=JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/PIPDetails.json")))
const gpdata=JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/NewGPDetails.json")))
const deadpatient=JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/DeadPatientDetails.json")))

test('Patient Death @Regression', async ({page}) => {
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page) 
    const patientsearch=new PatientSearch(page)
    const addreferral=new AddReferral(page)
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
    const patientdeath=new PatientDeath(page)
    const patientdetails=new PatientDetails(page)

    await page.goto(environment.Test)     
    await loginpage.enterUsername(logindata.username)
    await loginpage.enter_Password(logindata.password)    
    await loginpage.clickOnLogin()  
    await homepage.clickOnPatientIcon() 
   // await page.pause()
    await patientsearch.enterGivenName(deadpatient.GivenName)
    await patientsearch.enterFamilyName(deadpatient.FamilyName)   
    //await patientdetails.enter_Barcode(patientdetailsdata.New_Barcode) 
    await patientsearch.clickOnSearchButton()
    await patientsearch.clickOnSearchPatientLink()
    await patientsearch.ClickOnYesConfirmLegitimateRelationship()
    await confirmexisting.clickOnConfirmExistingDetails()    
    //await page.pause()
    await topbluebar.clickOnTopBlueBar()
    await editpatient.clickOnPatientDetails()    
    await editpatient.clickOnLinks()
    await editpatient.clickOnAppointmentLink()
    await editpatient.clickOnCloseInterestedPartyPopup()   
    await editpatient.clickOnLinks()   
    await editpatient.clickOnConsentLink() 
    await editpatient.clickOnCloseInterestedPartyPopup()   
    await editpatient.clickOnLinks()  
    await editpatient.clickOnDetailsLink() 
    await editpatient.clickOnCloseInterestedPartyPopup()    
    await editpatient.clickOnLinks()  
    //await page.pause()
    //await editpatient.clickOnPatientSummaryLink() 
    //await editpatient.clickOnCloseInterestedPartyPopup()    
    //await editpatient.clickOnLinks()  
    // await editpatient.clickOnSummaryLink() 
    // await editpatient.clickOnCloseInterestedPartyPopup()    
    // await editpatient.clickOnLinks()  
    await editpatient.clickOnInsuranceLink() 
    await editpatient.clickOnCloseInterestedPartyPopup()    
    await editpatient.clickOnLinks()  
    await editpatient.clickOnPatientPossibleDuplicate() 
    await editpatient.clickOnCloseInterestedPartyPopup()    
    await editpatient.clickOnLinks()  
    await editpatient.clickOnPatientInterestedParties() 
    await editpatient.clickOnCloseInterestedPartyPopup()    
    await editpatient.clickOnLinks()  
    await editpatient.clickOnReferral() 
    await addreferral.clickOnAddReferralBackButton()
    await editpatient.clickOnLinks()
    await editpatient.clickOnDeathLink()
    await editpatient.clickOnDeathLink()
    await patientdeath.enterCauseOfDeathReason()
    await patientdeath.selectCheckBoxDeathCauseReason()
    await patientdeath.enterCauseOfDeathWithCode()
    await patientdeath.enterCauseOfDeathType()
    await patientdeath.enterAdditionalNotes()
    await patientdeath.selectDateOfDeath()
    await patientdeath.selectMarkPatientAsDead()
    await patientdeath.clickOnSaveButton()
    
    //await expect(page.getByText('Patient death added successfully')).toHaveText('Patient death added successfully')
   // await expect(page.getByText('No GP associated with patient In order to send texts to the patient the patient\'')).toHaveText('No GP associated with patient In order to send texts to the patient the patient\'')
    await patientdeath.clickOnViewInReadOnly()
    await expect(page.getByRole('heading', { name: 'This patient is deceased' })).toHaveText('This patient is deceased')
    
   
   // await patientdeath.enterCauseOfDeathType()
    //await page.pause()


})