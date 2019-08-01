//index.js, this file connects database and event creation page, version 1 5/21/19, Grace Pham, dependencies: firebase database
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

// Reference to event branch 
var eventsRef = firebase.database().ref('event/');

// Listen for form submit
document.getElementById('createEventform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get data
  var eventname = getInputVal('eventname');
  var description = getInputVal('description');
  var time = getInputVal('time');
  var location = getInputVal('location');
  var participant = getInputVal('participant');
  var paidevent = getInputVal('paidevent');
  var disabled = getInputVal('disabled');

  // Save input data
  saveEvent(eventname, description, time, location, participant, paidevent, disabled);
}

// Get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save event to firebase
function saveEvent(eventname, description, time, location, participant, paidevent, disabled){
  var newEventRef = eventsRef.push();
  newEventRef.set({
    eventname: eventname,
    description:description,
    time:time,
    location:location,
    participant:participant,
    paidevent:paidevent,
    disabled: disabled
  });
}