import {    Route , Routes} from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Authentication/Login';
import { useStateValue } from './contextApi/StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
   const [{ user}, dispatch] = useStateValue();

   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  
  return (
    <>
   <Routes>
   <Route path="/" element={<><Header /><Home/></>} /> {/* Header on the home page */}
        
        <Route path="/checkout" element={<><Header /><Checkout/></>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
  
    </>
   
  )
}

export default App;
