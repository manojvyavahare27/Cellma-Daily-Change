class ServiceReferrals
{
    constructor(page)
    {
        this.page=page
        //Appointment Tab
        this.sidebarlinkAddAppointments=page.getByRole('button', { name: 'Add Appointments' })
        this.sidebarlinkServiceAppointment=page.getByRole('button', { name: 'Service Appointments' })
        this.sidebarlinkHPAppointment=page.getByRole('button', { name: 'HP Appointments' })
        this.sidebarlinkProvisionalAppointment=page.getByRole('button', { name: 'Provisional Appointments' })
        this.sidebarlinkWaitingRoom=page.getByRole('button', { name: 'Waiting Rooms' })
        this.sidebarlinkWaitingList=page.getByRole('button', { name: 'Waiting List' })
        this.sidebarlinkRoomBooking=page.getByRole('button', { name: 'Room Bookings' })
        this.sidebarTabAppointment=page.getByRole('button', { name: 'Appointments Image Avatar Appointments' })

      //Patient Tab
      this.sidebarTabPatient=page.getByRole('button', { name: 'Patients Image Avatar Patients' })                                  
      this.sidebarlinkAlert=page.getByRole('button', { name: 'Alerts' })
      this.sidebarlinkMyTask=page.getByRole('button', { name: 'My Tasks' })
      this.sidebarlinkServiceTask=page.getByRole('button', { name: 'Service Tasks' })
      this.sidebarlinkPathway=page.getByRole('button', { name: 'Pathway' })
      this.sidebarlinkProms=page.getByRole('button', { name: 'PROMs' })
      this.sidebarlinkDocument=page.getByRole('button', { name: 'Documents' })
      this.sidebarlinkServiceLetter=page.getByRole('button', { name: 'Service Letters' })
      this.sidebarlinkContraceptionUnmatch=page.getByRole('button', { name: 'Contraception Unmatched' })
      this.sidebarlinkTemplate=page.getByRole('button', { name: 'Templates' })

      //cellma Inbox
      this.sidebarTabCellmaInbox=page.getByRole('button', { name: 'Cellma Inbox Image Avatar Cellma Inbox' })
      this.sidebarlinkSent=page.getByRole('button', { name: 'Sent' })
      this.sidebarlinkReceived=page.getByRole('button', { name: 'Received' })

      //Order Comm
      this.sidebarlinkOrderComm=page.getByRole('button', { name: 'Order comm Image Avatar Order Comm' })
       //Lab
       this.sidebarlinkTabLab=page.getByRole('button', { name: 'Labs' })
       this.sidebarlinkOutstanding=page.getByRole('button', { name: 'Outstanding', exact: true })
       this.sidebarlinkRequest=page.getByRole('button', { name: 'Request' })
       this.sidebarlinkResult=page.getByRole('button', { name: 'Result' })
       //Imaging
       this.sidebarlinkTabImaging=page.getByRole('button', { name: 'Imaging' })
       this.sidebarlinkOutstanding=page.getByRole('button', { name: 'Outstanding', exact: true })
       this.sidebbarlinkRequest=page.getByRole('button', { name: 'Request' })
     
       //OutStanding Invest
       this.sidebarOutstandingInvestTab=page.getByRole('button', { name: 'Outstanding Invest' })
       this.sidebarlinkAllInvestigation=page.getByRole('button', { name: 'All Investigation' })
       //Service Setting tab
       this.sidebarTabServiceSetting=page.getByRole('button', { name: 'Service Setting Image Avatar Service Settings' })
       
       //Service Details tab
       this.sidebarTabServiceDetails=page.getByRole('button', { name: 'Service Details' })
       this.sidebarlinkServiceDetails=page.getByRole('button', { name: 'Service Details' }).nth(1)
       this.sidebarlinkScheduling=page.getByRole('button', { name: 'Scheduling' })
       this.sidebarlinkFinance=page.getByRole('button', { name: 'Finance' })
       this.sidebarlinkPatientSummary=page.getByRole('button', { name: 'Patient Summary' })
       this.sidebarlinkWaitingRoomMessage=page.getByRole('button', { name: 'Waiting Room Messages' })
       this.sidebarlinkHideHelpSection=page.getByRole('button', { name: 'Hide Help Sections' })
       this.sidebarlinkPreferance=page.getByRole('button', { name: 'Preferences' })
       this.sidebarlinkServiceDashboard=page.getByRole('button', { name: 'Service Dashboard' })
       this.sidebarServiceDefaultQuestion=page.getByRole('button', { name: 'Service Default Questions' })


       //Close Pupup
       this.closePopUpButton=page.getByRole('button', { name: 'cancelIcon' })
    }
    async clickonClosePopup()
    {
        await this.closePopUpButton.click()
    }
    async clickonServiceDefaultuestion()
    {
        await this.sidebarServiceDefaultQuestion.click()
    }
    async clickonServiceDashboard()
    {
        await this.sidebarlinkServiceDashboard.click()
    }
    async clickonPreference()
    {
        await this.sidebarlinkPreferance.click()
    }
    async clickonHideHelpSection()
    {
        await this.sidebarlinkHideHelpSection.click()
    }

    async clickonsidebarWatingRoomMessage()
    {
        await this.sidebarlinkWaitingRoomMessage.click()
    }
    async clickonsidebarPatientSummary()
    {
        await this.sidebarlinkPatientSummary.click()
    }
    async clickonsidebarFinance()
    {
        await this.sidebarlinkFinance.click()
    }
    async clickonlinkScheduling()
    {
        await this.sidebarlinkScheduling.click()
    }
    async clickonlinkServiceDetails()
    {
        await this.sidebarlinkServiceDetails.click()
    }
    async clickonTabServiceDetails()
    {
        await this.sidebarTabServiceDetails.click()
    }

    async clickonTabServiceSetting()
    {
        await this.sidebarTabServiceSetting.click()
    }
    async clickonsidebarlinkAllInvestigation()
    {
        await this.sidebarlinkAllInvestigation.click()
    }
    async clickonsidebartabOutstandingInvest()
    {
        await this.sidebarOutstandingInvestTab.click()
    }
    async clickonsidebarlinkRequest()
    {
        await this.sidebbarlinkRequest.click()
    }
    async clickonsidebarlinkOutstanding()
    {
        await this.sidebarlinkOutstanding.click()
    }
    
    async clickonsidebarTabImaging()
    {
        await this.sidebarlinkTabImaging.click()
    }
    async clickonsidebarlinkResult()
    {
        await this.sidebarlinkResult.click()
    }

    async clickonsidebarlinkRequest()
    {
        await this.sidebarlinkRequest.click()
    }
    async clickonsidebarOutstanding()
    {
        await this.sidebarlinkOutstanding.click()
    } 

    async clickonsidebarTabLab()
    {
        await this.sidebarlinkTabLab.click()
    }
    async clickonsidebarTabOrdercomm()
    {
        await this.sidebarlinkOrderComm.click()
    }
    async clickonsidebarlinkReceived()
    {
        await this.sidebarlinkReceived.click()
    }

    async clickonsidebarlinkSent()
    {
        await this.sidebarlinkSent.click()
    }

    async clickonsidebarTabCellmaInbox()
    {
        await this.sidebarTabCellmaInbox.click()
    }

    async clickonsidebarTemplate()
    {
        await this.sidebarlinkTemplate.click()
    }
    async clickonsidebarlinkContraceptionUnmatch()
    {
        await this.sidebarlinkContraceptionUnmatch.click()
    }
    async clickonsidebarServiceLetter()
    {
        await this.sidebarlinkServiceLetter.click()
    }

    async clickonsidebarDocument()
    {
        await this.sidebarlinkDocument.click()
    }
    async clickonsidebarProms()
    {
        await this.sidebarlinkProms.click()
    }
    async clickonsidebarlinkPathway()
    {
        await this.sidebarlinkPathway.click()
    }

    async clickonsidebarPatientTab()
    {
        await this.sidebarTabPatient.click()
    }
    async clickonlinkMyTask()
    {
     await this.sidebarlinkMyTask.click()
    }

   async clickonlinkAlert()
   {
    await this.sidebarlinkAlert.click()
   }

    async clickonSidebarCloseAppointmentTab()
    {
        await this.sidebarTabAppointment.click()
    }
    async clickonSidebarRoomBooking()
    {
        await this.sidebarlinkRoomBooking.click()
    }

    async clickonSidebarlinkWaitingList()
    {
        await this.sidebarlinkWaitingList.click()
    }
    async clickonSidebarlinkWaitingRoom()
    {
        await this.sidebarlinkWaitingRoom.click()
    }
    async clickonSidebarlinkProvisionalAppointment()
    {
        await this.sidebarlinkProvisionalAppointment.click()
    }
    async clickonSidebarlinkHPAppointments()
    {
        await this.sidebarlinkHPAppointment.click()
    }
    async clickonSidebarlinkServiceAppointment()
    {
        await this.sidebarlinkServiceAppointment.click()
    }
    async clickonSidebarlinkAddAppointments()
    {
        await this.sidebarlinkAddAppointments.click()
    }
}
module.exports=ServiceReferrals