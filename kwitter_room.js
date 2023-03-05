// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBirPZhLEhzkqM-dJCM0zme4dWyW4dPEW0",
    authDomain: "kwitter2-1e17a.firebaseapp.com",
    databaseURL: "https://kwitter2-1e17a-default-rtdb.firebaseio.com",
    projectId: "kwitter2-1e17a",
    storageBucket: "kwitter2-1e17a.appspot.com",
    messagingSenderId: "346031541020",
    appId: "1:346031541020:web:d51f7e372a71459b0c88d9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding_room_name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";


}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room name - "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
    
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    
}
