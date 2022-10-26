import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth}  from './firebase';
const Header = () => {
  const[{basket ,user },dispatch] = useStateValue();
    const handleAuthentication = () => {
      if(user){
        auth.signOut();
      }
    }
  return (
    <div className='header'>
    <Link to='/' >
        <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="img" />
        </Link>
        <div className="header__search">
            <input type="text" className="header__SearchInput" />
            {/* logo */}
            <SearchIcon className='header__SearchIcon' />
        </div>
        <div className="header__nav">
      <Link to={!user && '/login'} className='link'>
            <div onClick={handleAuthentication} className="header_option">
                    {/* sign in */}
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link> 

          <Link to='/' className='link'>
            <div className="header_option">
                    {/* return order */}
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
            </div>
            </Link>

            <Link to='/' className='link'>
            <div className="header_option">
                    {/* prime */}
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">prime</span>
            </div>
            </Link>
            <Link to='/checkout'>
            <div className="header__optionBasket">
                <ShoppingBasketIcon/>
                <span className="header_optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
            </Link>
        </div>

    </div>
  )
}

export default Header