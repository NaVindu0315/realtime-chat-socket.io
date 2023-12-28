import logo from './logo.svg';
import './App.css';

import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");
function App() {

  const [username,setuserrname] = useState('');
  const [room,setroom] = useState(''); 

  const joinRoom = () => { 

   }
  return (
    <div className="App">
     <h3>Join a chat</h3>

     <input type="text" placeholder="Ponna Balla" 
     onchange= {(event)=>
     
     {
      setuserrname(event.target.value);
     }
     } />
     <input type="text" placeholder="Room ID" />
     <button>Join a Room</button>
    </div>
  );
}

export default App;
