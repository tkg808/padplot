import './App.css';
import { useState } from 'react';
import LeftNavbar from './components/leftNavbar/LeftNavbar';

export default function App()
{
  const [currPage, setCurrPage] = useState("home");

  return (
    <div className="app-container">
      <LeftNavbar currPage={currPage} setCurrPage={setCurrPage} />
    </div>
  );
}