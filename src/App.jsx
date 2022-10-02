import {useEffect, useState} from 'react'
import {telegram} from "./telegram.js";
import {Button, Card, Typography} from "@mui/material";
import Event from "./components/Event.jsx";
import Events from "./components/Events.jsx";

function App() {

  const [user, setUser] = useState({
    username: ''
  });

  useEffect(() => {
    telegram.ready();
    setUser(telegram.initDataUnsafe);
  });

  return (
    <div className="App">
      <Events />
    </div>
  )
}

export default App
