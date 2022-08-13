import './NewProjectPage.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TabsGroup from '../homePage/tabsGroup/TabsGroup';

export default function NewProjectPage()
{
  const newProjectTabs =
    [
      { title: "Plan", linkPath: "/new-project/plan", barLeft: 0, barSize: 62 },
      { title: "Design", linkPath: "/new-project/plan", barLeft: 0, barSize: 62 },
      { title: "Build", linkPath: "/new-project/plan", barLeft: 0, barSize: 62 }
    ];

  const [newProjectTab, setNewProjectTab] = useState(newProjectTabs[0]);

  return (
    <div className="new-project-page-container">
      <div className="new-project-page-top-row-container">
        <TabsGroup
          tabsList={newProjectTabs}
          currTab={newProjectTab}
          setCurrTab={setNewProjectTab} />
      </div>
      <div className="new-project-page-content-container">
        <Outlet />
      </div>
    </div>
  );
}