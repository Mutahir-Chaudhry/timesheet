
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


