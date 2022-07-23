import './App.css';
import { useState } from 'react';
import LeftNavbar from './components/leftNavbar/LeftNavbar';
import HomePage from './components/homePage/HomePage';
import RightNavbar from './components/rightNavbar/RightNavbar';

export default function App()
{
  const [currPage, setCurrPage] = useState("home");
  const [showOverlay, setShowOverlay] = useState(false);

  function hideOverlay()
  {
    showOverlay && setShowOverlay(false);
  }

  return (
    <div className="app-container" onClick={hideOverlay}>
      <LeftNavbar
        currPage={currPage}
        setCurrPage={setCurrPage}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay} />
      <main className="main-container">
        {currPage === "home" && <HomePage />}
      </main>
      <RightNavbar />
    </div>
  );
}