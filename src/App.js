import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DashBoard from './components/DashBoard';
import Navbar from './components/Navbar';
import Scanner from './components/Scanner';
import Home from './components/Home';

function App() {

  return (
    <div>
        <Router>
          <Navbar/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/dashboard' element={<DashBoard/>}/>
              <Route path='/scanner' element={<Scanner/>}/>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;