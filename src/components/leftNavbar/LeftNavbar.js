import './LeftNavbar.css';
import { Link } from 'react-router-dom';
import logo from '../../res/padplot_logo.png';
import { MdOutlineHome, MdHome } from 'react-icons/md';
import { AiOutlineBell, AiFillBell } from 'react-icons/ai';
import { BsBarChart, BsBarChartFill, BsFileText, BsFileTextFill } from 'react-icons/bs';
import { IoPersonCircle } from 'react-icons/io5';
import { GoChevronDown } from 'react-icons/go';
import UserOverlay from './userOverlay/UserOverlay';

export default function LeftNavbar({ currPage, setCurrPage, showOverlay, setShowOverlay })
{
  return (
    <nav className="left-nav-container">
      <div className="left-nav-top-container">
        <div className="left-nav-logo-container">
          <img src={logo} alt="nav-logo" className="left-nav-logo" />
        </div>
        <div className="left-nav-top-icon-container">
          <Link to="" onClick={() => setCurrPage("home")}>
            {
              currPage === "home" ?
                <MdHome className="left-nav-icon" size={21} /> :
                <MdOutlineHome className="left-nav-icon" size={21} />
            }
          </Link>
          <Link to="" onClick={() => setCurrPage("notifications")}>
            {
              currPage === "notifications" ?
                <AiFillBell className="left-nav-icon" size={17} /> :
                <AiOutlineBell className="left-nav-icon" size={17} />
            }
          </Link>
          <Link to="" onClick={() => setCurrPage("analytics")}>
            {
              currPage === "analytics" ?
                <BsBarChartFill className="left-nav-icon" size={18.5} /> :
                <BsBarChart className="left-nav-icon" size={18.5} />
            }
          </Link>
          <Link to="" onClick={() => setCurrPage("newProject")}>
            {
              currPage === "newProject" ?
                <BsFileTextFill className="left-nav-icon" size={13} /> :
                <BsFileText className="left-nav-icon" size={13} />
            }
          </Link>
        </div>
      </div>
      <div className="left-nav-bot-container">
        <div className="left-nav-pill-container" onClick={() => setShowOverlay(!showOverlay)}>
          {showOverlay && <UserOverlay />}
          <IoPersonCircle className="pill-person-icon" size={32} />
          <GoChevronDown className="pill-arrow-icon" size={16} />
        </div>
      </div>
    </nav>
  )
}