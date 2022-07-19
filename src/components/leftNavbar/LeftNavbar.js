import './LeftNavbar.css';
import logo from '../../res/padplot_logo.png';
import { MdOutlineHome, MdHome } from 'react-icons/md';
import { AiOutlineBell, AiFillBell } from 'react-icons/ai';
import { BsBarChart, BsBarChartFill, BsFileText, BsFileTextFill } from 'react-icons/bs';
import { IoPersonCircle } from 'react-icons/io5';
import { GoChevronDown } from 'react-icons/go';

export default function LeftNavbar()
{
  return (
    <nav className="nav-container">
      <div className="nav-top-container">
        <div className="nav-logo-container">
          <img src={logo} alt="nav-logo" className="nav-logo" />
        </div>
        <div className="nav-top-icon-container">
          <MdHome className="nav-icon" size={21} />
          <AiFillBell className="nav-icon" size={17} />
          <BsBarChartFill className="nav-icon" size={18.5} />
          <BsFileTextFill className="nav-icon" size={13} />
        </div>
        <div className="nav-bot-container">

        </div>
      </div>
    </nav>
  )
}