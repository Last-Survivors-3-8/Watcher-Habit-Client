import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import Group from './pages/Group';
import MyHabit from './pages/MyHabit';
import Header from './components/common/Header';
import Sidebar from './components/sidebar/Sidebar';
import CreateNickname from './pages/CreateNickname';
import Loading from './lib/loading/Loading';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';

const queryClient = new QueryClient();
const CreateOrEditHabit = lazy(() => import('./pages/CreateHabit'));

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-nickname' element={<CreateNickname />} />
            <Route path='/500' element={<ServerError />} />
            <Route
              path='*'
              element={
                <div className='flex'>
                  <Sidebar />
                  <Header />
                  <div className='flex-1'>
                    <Routes>
                      <Route
                        path='/my-habit/:nickname/new-habit'
                        element={
                          <Suspense fallback={<Loading />}>
                            <CreateOrEditHabit isEdit={false} />
                          </Suspense>
                        }
                      />
                      <Route
                        path='/edit-habit/:habitId'
                        element={
                          <Suspense fallback={<Loading />}>
                            <CreateOrEditHabit isEdit={true} />
                          </Suspense>
                        }
                      />
                      <Route path='/my-habit/:nickname' element={<MyHabit />} />
                      <Route path='/group/:groupId' element={<Group />} />
                      <Route path='/*' element={<NotFound />} />
                    </Routes>
                  </div>
                </div>
              }
            />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
