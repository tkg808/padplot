import './LeftNavbar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../res/padplot_logo.png';
import { MdOutlineHome, MdHome } from 'react-icons/md';
import { AiOutlineBell, AiFillBell } from 'react-icons/ai';
import { BsBarChart, BsBarChartFill, BsFileText, BsFileTextFill } from 'react-icons/bs';
import { IoPersonCircle } from 'react-icons/io5';
import { GoChevronDown } from 'react-icons/go';
import UserOverlay from './userOverlay/UserOverlay';

export default function LeftNavbar({ currPage, setCurrPage })
{
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => 
  {
    showOverlay ? console.log("Showing") : console.log("Hiding");
  }, [showOverlay]);

  return (
    <nav className="nav-container">
      <div className="nav-top-container">
        <div className="nav-logo-container">
          <img src={logo} alt="nav-logo" className="nav-logo" />
        </div>
        <div className="nav-top-icon-container">
          <Link to="" onClick={() => setCurrPage("home")}>
            {
              currPage === "home" ?
                <MdHome className="nav-icon" size={21} /> :
                <MdOutlineHome className="nav-icon" size={21} />
            }
          </Link>
          <Link to="" onClick={() => setCurrPage("alerts")}>
            {
              currPage === "alerts" ?
                <AiFillBell className="nav-icon" size={17} /> :
                <AiOutlineBell className="nav-icon" size={17} />
            }
          </Link>
          <Link to="" onClick={() => setCurrPage("stats")}>
            {
              currPage === "stats" ?
                <BsBarChartFill className="nav-icon" size={18.5} /> :
                <BsBarChart className="nav-icon" size={18.5} />
            }
          </Link>
          <Link to="" onClick={() => setCurrPage("files")}>
            {
              currPage === "files" ?
                <BsFileTextFill className="nav-icon" size={13} /> :
                <BsFileText className="nav-icon" size={13} />
            }
          </Link>
        </div>
      </div>
      <div className="nav-bot-container">
        <div className="nav-pill-container" onClick={() => setShowOverlay(!showOverlay)}>
          {showOverlay && <UserOverlay />}
          <IoPersonCircle className="pill-person-icon" size={32} />
          <GoChevronDown className="pill-arrow-icon" size={16} />
        </div>
      </div>
    </nav>
  )
}