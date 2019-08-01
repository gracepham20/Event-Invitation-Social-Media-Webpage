//mainregist, this file connects the normal user registration page to the firebase database , version 1 5/15/19, Grace Pham, dependencies: firebase database
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

// Reference to user branch
var usersRef = firebase.database().ref('user/');

// Listen for form submit
document.getElementById('registerform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var Fname = getInputVal('Fname');
  var Lname = getInputVal('Lname');
  var email = getInputVal('email');
  var phonenum = getInputVal('phonenum');
  var age = getInputVal('age');
  var gender = getInputVal('gender');
  var password = getInputVal('password');

  // Save user's registration info
  saveUser(Fname, Lname, email, phonenum, age, gender, password);
}

// Get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save user's data to firebase
function saveUser(Fname, Lname, email, phonenum, age, gender, password){
  var newUserRef = usersRef.push();
  newUserRef.set({
    Fname: Fname,
    Lname:Lname,
    email:email,
    phonenum:phonenum,
    age:age,
    gender:gender,
    password:password
  });
}