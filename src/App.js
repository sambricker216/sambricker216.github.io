import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App-header">
        <h2 class='title'>Welcome to My Website</h2>
        <hr class="solid"></hr>

        <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage />}>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
