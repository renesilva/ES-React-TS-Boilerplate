import './assets/scss/stylesheet.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import { iNavBarOption } from './components/NavBar/NavBar.interfaces';
import ReduxExamplePage from './ReduxExamplePage/ReduxExamplePage';
import LoginPage from './pages/Admin/LoginPage/LoginPage';
import Boot from './redux/boot';

function App() {
  // options
  let navBarMainOptions: iNavBarOption[] = [{ option: 'Home', to: '/' }];
  let navBarRightOptions: iNavBarOption[] = [
    { option: 'My Profile', to: '/my-profile', displayIfLoggedIn: true },
    { option: 'Login', to: '/login', displayIfLoggedIn: false },
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
Boot()
  .then(() => App())
  .catch((error) => console.log(error));

export default App;
