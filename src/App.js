import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage';
import CreateHabit from './pages/CreateHabitPage';
import MyHabit from './pages/MyHabitPage';
import GroupPage from './pages/GroupPage';
import AwsS3Test from './pages/AwsS3Test';
import Sidebar from './components/Common/Sidebar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create-nickname' element={<CreateNicknamePage />} />
          <Route
            path='/my-habit/:nickname/new-habit'
            element={<CreateHabitPage />}
          />
          <Route path='/my-habit/:nickname' element={<MyHabitPage />} />
          <Route path='/group/:groupId' element={<GroupPage />} />
          <Route path='/aws-s3-test' element={<AwsS3TestPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
