class AddReferralDetails
{
    constructor(page)
    {
        this.page=page

        //Customisable Add Referral details
       this.btnSetting=page.getByTestId('Setting Button')
       this.btnCustomizableView=page.getByRole('menuitem', { name: 'Customizable View' })
        
    }

    //Customisable Add Referral details
    async clickOnSettingButton()
    {
        await this.btnSetting.click()
    }
    async clickOnCustomizableViewButton()
    {
        await this.btnCustomizableView.click()
    }

}
module.exports=AddReferralDetails