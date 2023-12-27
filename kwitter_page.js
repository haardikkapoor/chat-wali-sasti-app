const firebaseConfig = {
  apiKey: "AIzaSyA2VSdWLHD8pIN2s9Dt-Ec3rv6MmSS5org",
  authDomain: "cha-t-48277.firebaseapp.com",
  databaseURL: "https://cha-t-48277-default-rtdb.firebaseio.com",
  projectId: "cha-t-48277",
  storageBucket: "cha-t-48277.appspot.com",
  messagingSenderId: "262663541550",
  appId: "1:262663541550:web:7bbc9e912e955bb3cae0bf"
};

 firebase.initializeApp(firebaseConfig);
 
 
 username = localStorage.getItem("user_name");
 roomname = localStorage.getItem("room_name")

 function send(){
   msg = document.getElementById("msg").value;

   firebase.database().ref(roomname).push({
    name: username,
    message:msg
   })
 }


 //<h4> Name + ":" + message </h4>



 function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
  console.log(message_data);

  Name = message_data["name"];
  message = message_data["message"];

  nameandmsg = '<h4>' + Name + ":" + message + '</h4>';
  document.getElementById("output").innerHTML += nameandmsg;
//End code
} });  }); }
getData();


function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location = "index.html";
}
