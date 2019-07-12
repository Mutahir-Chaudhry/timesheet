
// create FireBase config

var config = {
    apiKey: "AIzaSyB4dKYZq025I8akUF_y--cYQD7YDhJ3g-8",
    authDomain: "timesheet-517bc.firebaseapp.com",
    databaseURL: "https://timesheet-517bc.firebaseio.com",
    projectId: "timesheet-517bc",
    storageBucket: "",
    messagingSenderId: "122369881968",
    appId: "1:122369881968:web:016ea2b37a42b928"
  };


  firebase.initializeApp(config);

  var database = firebase.database();

  var employeeName  = "";
  var role = "";
  var startDate = 0;
  var monthsWorked = 0;
  var monthlyRate = 0;
  var totalBilled = 0;


  



    
 
  $("#add-user").on("click", function(event){
      event.preventDefault();


      employeeName =$("#employeeName-input").val().trim();
      role =$("#role-input").val().trim();
      startDate =$("#start-date").val().trim();
      monthsWorked =$("#months-worked").val().trim();
      monthlyRate =$("#monthly-rate").val().trim();
      totalBilled =$("#total-billed").val().trim();
      

      database.ref().push({

        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthsWorked: monthsWorked,
        monthlyRate: monthlyRate,
        totalBilled: totalBilled,
    })
  })

