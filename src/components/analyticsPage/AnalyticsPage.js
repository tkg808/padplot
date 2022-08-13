import './AnalyticsPage.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TabsGroup from '../homePage/tabsGroup/TabsGroup';

export default function AnalyticsPage()
{
  const analyticsTabs =
    [
      { title: "Overview", linkPath: "/analytics/overview", barLeft: 0, barSize: 62 },
      { title: "Budget", linkPath: "/analytics/overview", barLeft: 0, barSize: 62 },
      { title: "Projects", linkPath: "/analytics/overview", barLeft: 0, barSize: 62 }
    ];

  const [analyticsTab, setAnalyticsTab] = useState(analyticsTabs[0]);

  return (
    <div className="analytics-page-container">
      <div className="analytics-page-top-row-container">
        <TabsGroup
          tabsList={analyticsTabs}
          currTab={analyticsTab}
          setCurrTab={setAnalyticsTab} />
      </div>
      <div className="analytics-page-content-container">
        <Outlet />
      </div>
    </div>
  );
}