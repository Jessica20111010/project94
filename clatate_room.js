var firebaseConfig = {
    apiKey: "AIzaSyCNWhVmeBoDJcXSRhldx-EXboSbcLh1OTY",
    authDomain: "clatate.firebaseapp.com",
    projectId: "clatate",
    storageBucket: "clatate.appspot.com",
    messagingSenderId: "430028320772",
    appId: "1:430028320772:web:5db67acb5b70359d26c551"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 });});}
getData();