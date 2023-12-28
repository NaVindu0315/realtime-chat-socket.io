import logo from './logo.svg';
import './App.css';
import { useState } from "react";

import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");
function App() {

  const [username,setuserrname] = useState("");
  const [room,setroom] = useState(""); 

  const joinRoom = () => { 
    if(username !== "" && room !== "") {
      socket.emit("join_room",room);
    }

   }
  return (
    <div className="App">
     <h3>Join a chat</h3>

     <input type="text" placeholder="Ponna Balla" 
     onChange= {(event)=>
     
     {
      setuserrname(event.target.value);
     }
     } />
     <input type="text" placeholder="Room ID" 
      onChange= {(event)=>
     
        {
         setroom(event.target.value);
        }
        }
     
     />
      <button onClick={joinRoom}>Join A Room</button>
    </div>
  );
}

export default App;
