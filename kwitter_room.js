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
document.getElementById("welcome").innerHTML = "Welcome " + username + "!";





function addRoom()
{
    roomname = document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({
  
    });
    localStorage.setItem("room_name", roomname );
    window.location = "kwitter_page.html";
}

window.addEventListener("keydown" , mykeydown);

function mykeydown(e){
   ascii = e.keyCode;

   if(ascii == 13)
   {
    roomname = document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({
  
    });
    localStorage.setItem("room_name", roomname );
    window.location = "kwitter_page.html";
   }
}


//<div id="Room_names" onclick="Changeroom()"> Room_names </div>


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       
    row = '<div id="' + Room_names + '" onclick="changeRoom(this.id)">' + Room_names + '</div><hr>';
    document.getElementById("output").innerHTML += row;
        
    });
  });

}

getData();

function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location = "index.html";
}