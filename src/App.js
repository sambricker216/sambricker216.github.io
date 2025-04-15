import './App.css';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Resume from './Pages/Resume';
import { Modal, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App-header" style={{'min-height': '100vh'}}>
      <h2 class='title'>Welcome to My Website</h2>
      <hr class="solid"></hr>
      <Homepage/>
      <Resume/>
    </div>
  )
}

export default App;
