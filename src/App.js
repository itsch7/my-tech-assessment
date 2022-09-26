import LandingPage from "./Pages/LandingPage";
import "./style.scss"
import Link from 'react-router-dom'
import Event from "./Pages/Event"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./Pages/CreateEvent";


function App() {
  return (
    <div className="App">
         <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />}/>
          <Route exact path="/create" element={<CreateEvent/>} />
          <Route exact path="/event" element={<Event/>} />
        
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
