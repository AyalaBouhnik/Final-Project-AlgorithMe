import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import Profile from './components/Profile';
import Practice from './components/Practice';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;