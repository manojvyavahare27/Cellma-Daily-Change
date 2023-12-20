class AddPatient
{
    constructor(page)
    {
        this.page=page
        this.dropdown_PtnameinOtherLang=page.getByTestId('Pt name in other language')
        this.dropdown_marrital_status=page.getByTestId('Marital Status').getByRole('button', { name: '' })
        this.dropdown_sexualorientation=page.getByTestId('Sexual Orientation').getByRole('button', { name: '​' })
        this.dropdown_CurrentlyPregnant=page.getByTestId('Currently Pregnant').getByRole('button', { name: '​' })
        this.dropdown_ethnicity=page.getByTestId('Ethnicity').getByRole('button', { name: '​' })  
        this.dropdown_occupation=page.getByTestId('Occupation').getByRole('button', { name: '​' }) 
        this.dropdown_religion=page.getByTestId('Religion').getByRole('button', { name: '​' })
        this.txtbox_townofbirth=page.locator("xpath=//input[@id='Town Of Birth']")
        this.txtbox_countyofbirth=page.locator("xpath=//input[@id='County Of Birth']")
        this.dropdown_countryofbirth=page.locator("xpath=//div[@id='mui-component-select-patCountryOfBirth']")
        this.dropdown_nationality=page.getByTestId('Nationality').getByRole('button', { name: '​' })
        this.dropdown_regdisable=page.getByTestId('Reg Disabled').getByRole('button', { name: 'No' })
        this.dropdown_primarydisablity=page.getByTestId('Primary Disability').getByRole('button', { name: '​' })
        this.txtbox_assistanceneeded=page.getByTestId('Assistance Needed')
        this.txtbox_DisabilityNotes=page.locator("xpath=//input[@id='Disability Note']")
        this.dropdown_Language=page.getByTestId('Language').getByRole('button', { name: '​' })
        this.dropdown_interpreterneeded=page.getByTestId('Interpreter Needed').getByRole('button', { name: '​' })
        this.dropdown_interpretertype=page.getByTestId('Interpreter Type').getByRole('button', { name: '​' })
        this.txtbox_NHSNo=page.getByTestId('NHS.No')
        this.txtbox_hospitalref=page.getByTestId('Hospital Ref')
        this.txtbox_Identifier=page.getByTestId('Identifier')
        this.txtbox_PasId=page.getByTestId('PAS ID')
        this.dropdownPatientType=page.getByTestId('Patient Type').getByRole('button', { name: '​' })
        this.dropdown_Prisoner=page.getByTestId('Prisoner').getByRole('button', { name: '​' })
        this.dropdown_BloodType=page.getByTestId('Blood Type').getByRole('button', { name: '​' })
        this.dropdown_Restricted_Registration=page.getByTestId('Restricted Registration').getByRole('button', { name: '​' })
        this.dropdown_Patientwebregistration=page.getByTestId('Patient Web Access').getByRole('button', { name: '​' })
        this.checkbox_LockPatientWebAccount=page.getByRole('checkbox', { name: 'Lock Patient Web Account' })
        this.link_ResetPassword=page.getByTestId('Reset Password')
        this.txtbox_Notes=page.getByTestId('Notes')
        this.btn_Next=page.getByTestId('Next')
        this.btn_Save=page.getByTestId('Save')       

    }

    async clickOnResetPasswordLink()
    {
        await this.link_ResetPassword.click()
    }
    async enterPatientNameInOtherLang()
    {
        await this.dropdown_PtnameinOtherLang.type('Cellma')
    }

    async clickOnLockPatientWebAccountCheckbox()
    {
        await this.checkbox_LockPatientWebAccount.click()
    }
    async selectMaritalStatusDropdown()
    {
        await this.dropdown_marrital_status.click()
        await this.page.getByRole('option', { name: 'Single' }).click()
    }
    async selectSexualOrientation()
    {
        await this.dropdown_sexualorientation.click()
        await this.page.getByRole('option', { name: 'Heterosexuality' }).click()
    }
    async selectCurrentlyPregnant()
    {
        await this.dropdown_CurrentlyPregnant.click()
        await this.page.getByRole('option', { name: 'No' }).click()
    }
    async selectEthnicity()
    {
        await this.dropdown_ethnicity.click()
        //await this.page.getByRole('option', { name: 'Indian' }).click()
        await this.page.getByRole('option', { name: 'Indian', exact: true }).click()
    }
    async selectOccupation()
    {
        await this.dropdown_occupation.click()
        await this.page.getByRole('option', { name: 'Trainer', exact: true }).click()
    }
    async SelectReligion()
    {
        await this.dropdown_religion.click()
        await this.page.getByRole('option', { name: 'Hindu', exact: true }).click()
    }
    async enterTownOfBirth(name)
    {
        await this.txtbox_townofbirth.type(name)
    }
    async enterCountyOfBirth(name)
    {
        await this.txtbox_countyofbirth.type(name)
    }
    async selectCountryOfBirth()
    {
        await this.dropdown_countryofbirth.click()
        await this.page.getByRole('option', { name: 'India', exact: true }).click()
    }
    async selectNationality()
    {
        await this.dropdown_nationality.click()
        await this.page.getByRole('option', { name: 'Indian', exact: true }).click()
    }
    async selectRegDisable()
    {
        await this.dropdown_regdisable.click()
        await this.page.getByRole('option', { name: 'No', exact: true }).click()
    }
    async selectPrimaryDisablity()
    {
        await this.dropdown_primarydisablity.click()
        await this.page.getByRole('option', { name: 'NO' }).getByRole('checkbox').click()
        await this.page.getByTestId('Family Name').click()
       // await this.page.getByRole('option', { name: 'Blindness', exact: true }).getByRole('checkbox').click()
    }
    async enterAssestanceNeeded(name)
    {
        await this.txtbox_assistanceneeded.click()
        await this.txtbox_assistanceneeded.type(name)
    }
    async enterDisablityNotes(name)
    {
        await this.txtbox_DisabilityNotes.type(name)
    }
    async selectLanguage()
    {
        await this.dropdown_Language.click()
        await this.page.getByRole('option', { name: 'English', exact: true }).click()
    }
    async selectInterpreterNeeded()
    {
        await this.dropdown_interpreterneeded.click()
        await this.page.getByRole('option', { name: 'Yes' }).click()
    }
     
    async selectInterpreterType()
    {
        await this.dropdown_interpretertype.click()
        await this.page.getByRole('option', { name: 'Whisper', exact: true }).click()
    }
    async enterNHSNo(name)
    {
        await this.txtbox_NHSNo.type(name)
    }
    async enterHospitalRef(name)
    {
        await this.txtbox_hospitalref.type(name)
    }
    async enterIdentifier(name)
    {
        await this.txtbox_Identifier.type(name)
    }
    async enterPASId(name)
    {
        await this.txtbox_PasId.type(name)
    }
    async selectPatientType()
    {
        await this.dropdownPatientType.click()
        await this.page.getByRole('option', { name: 'Regular', exact: true }).click()
    }
    async selectPrisoner()
    {
        await this.dropdown_Prisoner.click()
        await this.page.getByRole('option', { name: 'No', exact: true }).click()
    }
    async selectBloodType()
    {
        await this.dropdown_BloodType.click()
        await this.page.locator("xpath=//body/div[@id='menu-patBloodGroup']/div[3]/ul[1]/li[2]").click()
    }
    async selectRestrictedRegistration()
    {
        await this.dropdown_Restricted_Registration.click()
        //await this.getByRole('option', { name: 'No' }).click()
        await this.page.locator("xpath=//body/div[@id='menu-patBanned']/div[3]/ul[1]/li[2]").click()
    }

    async selectPatientWebRegistration()
    {
        await this.dropdown_Patientwebregistration.click()
        await this.page.getByRole('option', { name: 'No', exact: true }).click()
    }
    async enterNotes()
    {
        await this.txtbox_Notes.type("Added for Testing")
    }
    async clickOnNextButton()
    {
        await this.btn_Next.click()
    }
    async clickOnsavebutton()
    {
        await this.btn_Save.click()
    }

}

module.exports=AddPatient