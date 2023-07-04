import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
import DetailMobile from './pages/Detail/DetailMobile';
import Profile from './pages/Profile/Profile';
import ProfileMobile from './pages/Profile/ProfileMobile';
import Register from './pages/Register/Register';
import RegisterMobile from './pages/Register/RegisterMobile';
import Search from './pages/Search/Search';
import Carts from './pages/Carts/Carts';
import CartsMobile from './pages/Carts/CartsMobile';
import HomeMobile from './pages/Home/HomeMobile';
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
            <Route index element={<ResponsiveItem component={Home} mobileComponent={HomeMobile} />} />
            <Route path='*' element={<ResponsiveItem component={Home} mobileComponent={HomeMobile} />} />
            <Route path='login' element={<ResponsiveItem component={Login} mobileComponent={LoginMobile} />} />
            <Route path='register' element={<ResponsiveItem component={Register} mobileComponent={RegisterMobile} />} />
            <Route path='detail/:productId' element={<ResponsiveItem component={Detail} mobileComponent={DetailMobile} />} />
            <Route path='profile' element={<ResponsiveItem component={Profile} mobileComponent={ProfileMobile}/>}>
              <Route path='history' element={<ResponsiveItem component={HistoryOrderPage} mobileComponent={HistoryOrderPageMobile}/>}/>
              <Route path='favourite' element={<ResponsiveItem component={FavouritePage}/>}/>
            </Route>
            <Route path='search' element={<ResponsiveItem component={Search}/>} />
            <Route path='carts' element={<ResponsiveItem component={Carts} mobileComponent={CartsMobile} />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
