// import { test, expect } from '@playwright/test';
// const mysql = require('mysql');


// const connection = mysql.createConnection({
//   host: 'localhost',      // Replace with your database host
//   user: 'admin',       // Replace with your database username
//   password: 'Welcome@123',   // Replace with your database password
//   database: 'cellma4_api_18may23',   // Replace with your database name
//   port: '3310'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database');
  
  
// });

// var r = [];
// //const query = 'SELECT * FROM patients order by pat_id desc limit 10'; // Replace `your_table` with the name of your table
// const query='select * from patients where pat_id=10995'
// const response = connection.query(query, (err, results,fields) => {
//   if(err) 
//    {
//     console.log(err)
//    }
//    else{
//    // console.log(results);
//     r = JSON.parse(JSON.stringify(results))     
//    console.log(r[0].pat_id)
//    //console.log(r[0].pat_id);
//    //console.log(r[6].pat_hospital_ref)
//    return r;   
//    }
//   });


  // test('Verify with Database', async () => {
  //   setTimeout(() => {
  //     console.log("Added for testing");
  //   console.log(r[0].pat_id);
  //   expect((r[0].pat_id).toString()).toHaveText('10995');
  //   console.log(r[0].pat_id);
  //   }, 5000);
    
  //  });


//console.log(response);
//const logindata= JSON.parse(JSON.stringify(require(response.toString())))
/*
test(`Verify Database`, async () => {
  console.log("query data",logindata)
  //expect(response[0].pat_id).toHaveText('10995')

});*/

