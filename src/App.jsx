import {useEffect, useState} from 'react'
import {telegram} from "./telegram.js";
import {Button} from "@mui/material";

function App() {
  const userData = telegram.initDataUnsafe.user;
  useEffect(() => {
    telegram.ready();
  })

  console.log(userData);

  return (
    <div className="App">
      <img src={userData.photo_url} alt="photo"/>
      <p>Привет {userData.username}</p>
      Расшифруйте особенности вашего тела, узнайте что на вас влияет, какая у вас стратегия жизни, какие камни вам
      подходят и многое другое
      <Button color="primary">Расшифровать</Button>
    </div>
  )
}

export default App
