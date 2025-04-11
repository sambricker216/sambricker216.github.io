import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Resume from './Pages/Resume';
import Navigationbar from './Components/Navbar';

function App() {
  return (
    <div className="App-header">
        <h2 class='title'>Welcome to My Website</h2>
        <hr class="solid"></hr>

        <BrowserRouter>
          <Navigationbar/>
          <hr class="solid" style={{paddingBottom: '2%'}}></hr>
          <Routes>
              <Route path="/" element={<Homepage />}>
              </Route>
              <Route path="/resume" element={<Resume/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
