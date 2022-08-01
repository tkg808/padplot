import './HomePage.css';
import { Outlet } from 'react-router-dom';
import { TbPlus } from 'react-icons/tb';
import TabsGroup from './tabsGroup/TabsGroup';

export default function HomePage()
{
  const homeTabs =
    [
      { title: "Overview", linkPath: "/home/overview" },
      { title: "Recent", linkPath: "/home/recent" }
    ];

  return (
    <div className="home-page-container">
      <div className="home-page-tabs-row-container">
        <TabsGroup tabsList={homeTabs} />
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