import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import Profile from './components/Profile';
import Practice from './components/Practice';
import BFS from "./components/BFS";
import DFS from "./components/DFS";
import LCS from "./components/LCS";
import LIS from "./components/LIS";
import BubbleSort from "./components/BubbleSort";
import CountingSort from "./components/CountingSort";

import React from 'react';
import { AuthContextProvider } from './context/authContext';
import LoginButton from './components/LoginButton';
import Protected from './components/Protected';
import CreateTest from './components/CreateTest';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <div className="App">
            <Navbar />
            <div className="content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route
                  path="/profile"
                  element={
                    <Protected>
                      <Profile />
                    </Protected>
                  }
                />
                <Route path="/practice" element={<Practice />} />
                <Route path="/loginbutton" element={<LoginButton />} />
                <Route path="/bfs" element={<BFS />} />
                <Route path="/dfs" element={<DFS />} />
                <Route path="/lcs" element={<LCS />} />
                <Route path="/lis" element={<LIS />} />
                <Route path="/bubblesort" element={<BubbleSort />} />
                <Route path="/countingsort" element={<CountingSort />} />
                <Route
                  path="/admintest"
                  element={
                    <Protected>
                      <CreateTest />{" "}
                    </Protected>
                  }
                />
              </Routes>
            </div>
          </div>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;