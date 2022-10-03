import './assets/scss/stylesheet.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import { iNavBarOption } from './components/NavBar/NavBar.interfaces';
import ReduxExamplePage from './ReduxExamplePage/ReduxExamplePage';
import LoginPage from './pages/Admin/LoginPage/LoginPage';
import Boot from './redux/boot';
import TodoList from './components/Examples/TodoList/TodoList';

function App() {
  // options
  let navBarMainOptions: iNavBarOption[] = [{ option: 'Home', to: '/' }];
  let navBarRightOptions: iNavBarOption[] = [
    {
      jsx: (
        <button
          className="btn btn-outline-secondary position-relative"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
        >
          <i className="bi bi-card-checklist"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            1
          </span>
        </button>
      ),
    },
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
        <div className="offcanvas offcanvas-end" id="offcanvasRight">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Todo List</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <TodoList />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
Boot()
  .then(() => App())
  .catch((error) => console.log(error));

export default App;
