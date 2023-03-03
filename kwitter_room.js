// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzuGfcu_m2EUEY9pHxhTA9XXaFm5NMWrs",
    authDomain: "kwitter-d4f96.firebaseapp.com",
    databaseURL: "https://kwitter-d4f96-default-rtdb.firebaseio.com",
    projectId: "kwitter-d4f96",
    storageBucket: "kwitter-d4f96.appspot.com",
    messagingSenderId: "913236964863",
    appId: "1:913236964863:web:6ebc7ca9bbce0f60f463ca"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
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
