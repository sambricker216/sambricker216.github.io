import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './Pages/Homepage';
import Resume from './Pages/Resume';

function App() {
  return (
    <div className="App-header">
      <header className="site-header">
        <h1 className="title">Samuel Bricker</h1>
        <p className="subtitle">Programmer Analyst II &middot; Data Engineering &middot; Delray Beach, FL</p>
      </header>
      <hr className="solid" />
      <main className="site-main">
        <Homepage />
        <Resume />
      </main>
      <footer className="site-footer">
        &copy; {new Date().getFullYear()} Samuel Bricker
      </footer>
    </div>
  );
}

export default App;
