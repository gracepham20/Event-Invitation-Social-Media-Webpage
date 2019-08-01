//mainlogin.js, this file connects the Log in page to the firebase database , version 1 6/4/19, Grace Pham, dependencies: firebase database
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

  // Reference user authenticity info branch
  var busRef = firebase.database().ref('userAuthenticity/');

  // Listen for form submit
  document.getElementById('loginform').addEventListener('submit', submitForm);

  // Submit form
  function submitForm(e){
    e.preventDefault();

    // Get values
    var username = getInputVal('username');
    var password = getInputVal('password');

    // Save user's login info
    saveBu(username, password);
  }

  // Get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save user's authenticity data to firebase
  function saveBu(username, password){
    var newBuRef = busRef.push();
    newBuRef.set({
      username: username,
      password:password
    });
  }
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth().signInWithPopup(provider)
      
          .then(result => {
              const user = result.user;        
          }) 
}