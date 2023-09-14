import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateHabit from './pages/CreateHabit';
import MyHabit from './pages/MyHabit';
import Group from './pages/Group';
import AwsS3Test from './pages/AwsS3Test';
import Sidebar from './components/Common/Sidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path='*'
          element={
            <div className='flex'>
              <Sidebar />
              <div className='flex-1'>
                <Routes>
                  <Route
                    path='/my-habit/:nickname/new-habit'
                    element={<CreateHabit />}
                  />
                  <Route path='/my-habit/:nickname' element={<MyHabit />} />
                  <Route path='/group/:groupId' element={<Group />} />
                  <Route path='/aws-s3-test' element={<AwsS3Test />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
