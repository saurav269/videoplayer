import React from 'react'
import './Navbar.css'
import MenuIcon from '../../assets/menu.png'
import MenuLogo from '../../assets/nlogo.png'
import SearchIcon from '../../assets/search.png'
import UploadIcon from '../../assets/upload.png'
import MoreIcon from '../../assets/more.png'
import NotificationIcon from '../../assets/notification.png'
import ProfileIcon from '../../assets/jack.png'
import { Link } from 'react-router-dom'


const Navbar = ({setSideBar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img src={MenuIcon} alt=''
            onClick={() => setSideBar(prev=> prev===false?true:false)}
             className='menu-icon'/>
            <Link to='/'>
            <img src={MenuLogo} alt='' style={{ height: "40px"}} className='logo' />
            </Link>
        </div>
        <div className='nav-middle flex-div'>
            <div className="search-box flex-div">
            <input type='text' placeholder='Search Here'/>
            <img src={SearchIcon} alt='' />
            </div>
        </div>
        <div className='nav-right flex-div'>
            <img src={UploadIcon} alt="" />
            <img src={MoreIcon} alt="" />
            <img src={NotificationIcon} alt="" />
            <img src={ProfileIcon} alt="" className='user_icon' />
        </div>
      
    </nav>
  )
}
 
export default Navbar
