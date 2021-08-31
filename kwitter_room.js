const firebaseConfig = {
    apiKey: "AIzaSyAoFPZ-mFeisfyTtDqBqvC5CS9YqjpdDOg",
    authDomain: "pro94-1cda4.firebaseapp.com",
    projectId: "pro94-1cda4",
    storageBucket: "pro94-1cda4.appspot.com",
    messagingSenderId: "81159461203",
    appId: "1:81159461203:web:ad04f7d80b1f58b5f829a6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
function Addroom() {
      Room_names = document.getElementById("Room_names").value;
      firebase.database().ref("/").child("Room_names").update({
       purpose : "adding room name" 
      });
      localStorage.setItem("Room_names", Room_names);
      window.location = "Kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                   console.log("room name - " + Room_names);
                   row = "<div class = 'Room_names' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>  #" + Room_names + "</div> <hr>"; 
                   document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user name");
      
      window.location = "Kwitter.html";
}