import './App.css';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import authService from "./appwrite/auth";
import { login, logout} from "./store/authSlice";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { Header, Footer } from "./components";

function App() {
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}));
      } else {
        // if no data then logout
        dispatch(logout());
      }
    })
    // dispatch to go user data in slice action
    .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between"> 
      <div className='w-full block'> 
        <Header/>
        <main>
          <Outlet/>
          <ToastContainer />
        </main>
        <Footer/>
      </div>
    </div>
  ) : null ;

}

export default App;
