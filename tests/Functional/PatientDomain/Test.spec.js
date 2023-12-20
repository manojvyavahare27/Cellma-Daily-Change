import { test, expect, Page, chromium } from '@playwright/test';

test.describe.configure({ mode: 'serial' });


test('Login Page_TC_C4_Login_001', async ({page}) => {
    
    let loadTime;

    page.on('metrics', ({ title, metrics }) => {
        //if (title === 'Document') {
          loadTime = metrics.Timestamp;
        //}
      });

      await page.goto('http://10.0.0.63:3000/cellmaUser/login');
      await page.getByTestId('Username').click();
      await page.getByTestId('Username').fill('trainer.dhanu');
      await page.getByTestId('Password').click();
      await page.getByTestId('Password').fill('Welcome@123');
      await page.getByTestId('Login').click();
      await page.goto('http://10.0.0.63:3000/cellmaUser/home');
    //   await page.pause()
    //   const startTime = Date.now();
      
    //   const endTime = Date.now();
    //   const pageLoadTime = loadTime - startTime;
    //   console.log(`Page load time: ${pageLoadTime} ms`);

    //   await page.getByRole('heading', { name: 'Patients' }).click();
    //   await page.getByRole('img', { name: 'Cellma Image Avatar' }).click();
    //   await page.getByTestId('Menu').click();
    //   await page.getByTestId('menuDropDownLogout').click();
    
  });

