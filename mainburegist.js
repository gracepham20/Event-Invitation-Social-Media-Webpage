//mainburegist, this file connects the buisness user registration page to the firebase database , version 1 5/15/19, Grace Pham, dependencies: firebase database
// Initialize Firebase
var config = {
    apiKey: "AIzaSyC26RXxziJV2MPoDAXH8EA6CVuQnlb7XX",
    authDomain: "irlfg-acf25.firebaseapp.com",
    databaseURL: "https://irlfg-acf25.firebaseio.com",
    projectId: "irlfg-acf25",
    storageBucket: "irlfg-acf25.appspot.com",
    messagingSenderId: "700800449073"
  };
  firebase.initializeApp(config);
  
  // Reference to business's info branch
  var busRef = firebase.database().ref('business/');
  
  // Listen for form submit
  document.getElementById('registerbuform').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var companyname = getInputVal('companyname');
    var address = getInputVal('address');
    var ownername = getInputVal('ownername');
    var email = getInputVal('email');
    var phonenum = getInputVal('phonenum');
  
    // Save business's registration info
    saveBu(companyname, address, ownername, email, phonenum);
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save business's data to firebase
  function saveBu(companyname, address, ownername, email, phonenum){
    var newBuRef = busRef.push();
    newBuRef.set({
      companyname: companyname,
      address:address,
      ownername:ownername,
      email:email,
      phonenum:phonenum
    });
  }