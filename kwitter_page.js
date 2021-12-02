var firebaseConfig = {
      apiKey: "AIzaSyCEmkbEuQX5buf2HlSkNJI2QmBmWQ_To1M",
      authDomain: "kwiter-7a6a7.firebaseapp.com",
      databaseURL: "https://kwiter-7a6a7-default-rtdb.firebaseio.com",
      projectId: "kwiter-7a6a7",
      storageBucket: "kwiter-7a6a7.appspot.com",
      messagingSenderId: "397633546080",
      appId: "1:397633546080:web:b66cbf8b22b3f2aed7e005",
      measurementId: "G-PQT9DLXZXP"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}