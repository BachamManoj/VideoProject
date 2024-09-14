import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import AddUser from './users/AddUser';
import VideoCall from './pages/VideoCall';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <style>
          {`
            body {
              background-color: #e0dcdf;
            }
          `}
        </style>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/addUser' element={<AddUser />} />
        </Routes>        
      </Router> */}
      <VideoCall/>
    </div>
  );
}

export default App;
