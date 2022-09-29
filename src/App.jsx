import {useEffect} from 'react'
import {telegram} from "./telegram.js";
import {Button} from "@mui/material";

function App() {

  useEffect(() => {
    telegram.ready();
  })

  return (
    <div className="App">
      Расшифруйте особенности вашего тела, узнайте что на вас влияет, какая у вас стратегия жизни, какие камни вам
      подходят и многое другое
      <Button color="primary">Расшифровать</Button>
    </div>
  )
}

export default App
