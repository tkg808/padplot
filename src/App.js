import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LeftNavbar from './components/leftNavbar/LeftNavbar';
import HomePage from './components/homePage/HomePage';
import HomeOverview from './components/homePage/homeOverview/HomeOverview';
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
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} >
            <Route index element={<HomeOverview />} />
            <Route path="overview" element={<HomeOverview />} />
            <Route path="recent" element={<div>Recent is working</div>} />
          </Route>
        </Routes>
      </main>
      <RightNavbar />
    </div>
  );
}