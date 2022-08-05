import './NotificationsPage.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TabsGroup from '../homePage/tabsGroup/TabsGroup';

export default function NotificationsPage()
{
  const notificationsTabs =
    [
      { title: "Overview", linkPath: "/notifications/overview", barLeft: 0, barSize: 62 },
      { title: "Messages", linkPath: "/notifications/messages", barLeft: 0, barSize: 62 }
    ];

  const [notificationsTab, setNotificationsTab] = useState(notificationsTabs[0]);

  return (
    <div className="notifications-page-container">
      <div className="notifications-page-top-row-container">
        <TabsGroup
          tabsList={notificationsTabs}
          currTab={notificationsTab}
          setCurrTab={setNotificationsTab} />
      </div>
      <div className="notifications-page-content-container">
        <Outlet />
      </div>
    </div>
  );
}