import './App.css';
import { useState } from 'react';
import LeftNavbar from './components/leftNavbar/LeftNavbar';

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
    </div>
  );
}