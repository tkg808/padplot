import './HomePage.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { TbPlus } from 'react-icons/tb';
import TabsGroup from './tabsGroup/TabsGroup';

export default function HomePage()
{
  const homeTabs =
    [
      { title: "Overview", linkPath: "/home/overview", barLeft: 0, barSize: 62 },
      { title: "Recent", linkPath: "/home/recent", barLeft: 0, barSize: 62 }
    ];

  const [homeTab, setHomeTab] = useState(homeTabs[0]);

  useEffect(() =>
  {
    if (window.location.pathname === "/home")
    {
      setHomeTab(homeTabs[0]);
    }
  }, []);

  return (
    <div className="home-page-container">
      <div className="home-page-tabs-row-container">
        <TabsGroup
          tabsList={homeTabs}
          currTab={homeTab}
          setCurrTab={setHomeTab} />
        <div className="home-page-new-project-button-container">
          <button className="home-page-new-project-button">
            <TbPlus
              className="home-page-new-project-button-plus-icon"
              size={24} /> New Project
          </button>
        </div>
      </div>
      <div className="home-page-content-container">
        <Outlet />
      </div>
    </div >
  );
}