const { expect } = require("@playwright/test")

class ServiceAppointment
{
    //const AllLink;
    constructor(page)
    {
        this.page=page
        this.btnBack=page.getByLabel('Back Button')

        //AllLinks        
        this.allLinks=page.getByTestId('Links')
        this.linkAppReminder=page.getByRole('heading', { name: 'Appointment Reminders' })
        this.linkBookAppointment=page.getByRole('heading', { name: 'Book Appointment' })
        this.linkDeitetics=page.getByRole('heading', { name: 'Dietetics' })
        this.linkFinance=page.getByRole('heading', { name: 'Finance' })
        this.linkInfusion=page.getByRole('heading', { name: 'Infusions' })
        this.linkPatientAdd=page.getByRole('heading', { name: 'Patient Add' })
        this.linkRefresh=page.getByRole('heading', { name: 'Refresh' })
        this.linkRoomManagement=page.getByRole('heading', { name: 'Room Management' })
        this.linkRooms=page.getByRole('heading', { name: 'Rooms' })
        this.linkService=page.getByTestId('service').getByRole('heading', { name: 'Service' })
        this.linkServiceAppointment=page.getByTestId('serviceAppointments').getByRole('heading', { name: 'Service Appointments' })
        this.linkServiceAppointmentAvailability=page.getByRole('heading', { name: 'Service Appointments Availability' })
        this.linkSummary=page.getByRole('heading', { name: 'Summary' })
        this.linkWorkList=page.getByRole('heading', { name: 'Worklists' })

        this.linkRoomBooking=page.locator("xpath=//h1[normalize-space()='Room Bookings']")
        this.linkProvisionalAppointment=page.getByRole('button', { name: 'Provisional Appointments' })
        
        
    }
    async clickOnProvisionalAppLink()
    {
        await this.linkProvisionalAppointment.click()
    }

    async clickOnRoomBookingLink()
    {
        await this.linkRoomBooking.click()
    }
async clicOnBackButton()
{
    await this.btnBack.click()
}
}
module.exports=ServiceAppointment