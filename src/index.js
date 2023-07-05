import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/ConfigStore';
import { unstable_HistoryRouter as HistoryRouter, Route, Router, Routes } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import Home from './pages/Home/Home';
import MainTemplate from './templates/MainTemplate';
import ResponsiveItem from './utils/Responsive';
import Login from './pages/Login/Login';
import LoginMobile from './pages/Login/LoginMobile';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import ProfileMobile from './pages/Profile/ProfileMobile';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';
import Carts from './pages/Carts/Carts';
import HistoryOrderPage from './pages/HistoryPage/HistoryOrderPage';
import FavouritePage from './pages/FavouritePage/FavouritePage';
import HistoryOrderPageMobile from './pages/HistoryPage/HistoryOrderPageMobile';

export const history = createBrowserHistory();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path='' element={<MainTemplate />}>
            <Route index element={<ResponsiveItem component={Home}/>} />
            <Route path='*' element={<ResponsiveItem component={Home}/>} />
            <Route path='login' element={<ResponsiveItem component={Login} mobileComponent={LoginMobile} />} />
            <Route path='register' element={<ResponsiveItem component={Register}/>} />
            <Route path='detail/:productId' element={<ResponsiveItem component={Detail}/>} />
            <Route path='profile' element={<ResponsiveItem component={Profile} mobileComponent={ProfileMobile}/>}>
              <Route path='history' element={<ResponsiveItem component={HistoryOrderPage} mobileComponent={HistoryOrderPageMobile}/>}/>
              <Route path='favourite' element={<ResponsiveItem component={FavouritePage}/>}/>
            </Route>
            <Route path='search' element={<ResponsiveItem component={Search}/>} />
            <Route path='carts' element={<ResponsiveItem component={Carts}/>} />
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
