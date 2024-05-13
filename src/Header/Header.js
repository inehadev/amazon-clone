import React from 'react'
import '../Header/header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../contextApi/StateProvider';
import { auth } from '../firebase';
function Header() {
  const [{basket , user} ]=useStateValue();

  const login = () => {
    if (user) {
      auth().signOut();
    }
  };

  return (
    <>
    <nav className='header'>
      <Link to='/'>
        <img className='header-logo'
         src='amazon-logo.png' 
         alt='img'></img>
         </Link>

         <div className='header-search'>
          <input className='header-searchinput'></input>
          <SearchIcon className='header-searchIcon'/>
         </div>
          
          <div className='header-nav'>
            <Link to='/login' className='header-link'>
            <div className='header-option'>
            <span className='headerOption-L1'>Hello</span>
            <span className='headerOption-L2'> {user ? "Sign Out" : "Sign In"}</span>
            </div>
            </Link>

            <Link to='/' className='header-link'>
            <div className='header-option'>
            <span className='headerOption-L1'>Returns</span>
            <span className='headerOption-L2'>& Orders</span>
            </div>
            </Link>
            

            <Link to='/' className='header-link'>
            <div className='header-option'>
            <span className='headerOption-L1'>Your</span>
            <span className='headerOption-L2'>Prize</span>
            </div>
            </Link>


            <Link className='header-link' to='/checkout'>
              <div className='header-basket'>
                <ShoppingBasket/>
                <span className='headerOption-L2 header-basketcount'>{basket?.length}</span>
              </div>
            </Link>
            </div>
          
    
    </nav>
    </>
  )
}

export default Header
