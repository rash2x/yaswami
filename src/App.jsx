import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {telegram} from './telegram.js';
import Events from './components/Events.jsx';
import EventPage from './components/EventPage';

function App() {
  const [user, setUser] = useState({
    username: ''
  });

  useEffect(() => {
    telegram.ready();
    setUser(telegram.initDataUnsafe);
  });

  return (<div className="App">
    <Routes>
      <Route path="/" element={<Events/>}/>
      <Route path="events/:id" element={<EventPage/>}/>
    </Routes>

  </div>);
}

export default App;
