import './assets/scss/stylesheet.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import { NavBarOption } from './components/NavBar/NavBar.interfaces';
import ReduxExamplePage from './ReduxExamplePage/ReduxExamplePage';
import LoginPage from './pages/Admin/LoginPage/LoginPage';

function App() {
  // options
  let navBarMainOptions: NavBarOption[] = [{ option: 'Home', to: '/' }];
  let navBarRightOptions: NavBarOption[] = [
    { option: 'My Profile', to: '/my-profile', displayIfLoggedIn: true },
    { option: 'Login', to: '/loginRequest', displayIfLoggedIn: false },
    { option: 'Logout', to: '/logout', displayIfLoggedIn: true },
  ];
  return (
    <BrowserRouter>
      <NavBar main={navBarMainOptions} right={navBarRightOptions}></NavBar>
      <div className="App">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/redux-example-page" element={<ReduxExamplePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
