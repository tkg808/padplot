import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LeftNavbar from './components/leftNavbar/LeftNavbar';
import RightNavbar from './components/rightNavbar/RightNavbar';
import HomePage from './components/homePage/HomePage';
import HomeOverview from './components/homePage/homeOverview/HomeOverview';
import HomeRecent from './components/homePage/homeRecent/HomeRecent';
import NotificationsPage from './components/notificationsPage/NotificationsPage';
import NotificationsOverview from './components/notificationsPage/notificationsOverview/NotificationsOverview';
import AnalyticsPage from './components/analyticsPage/AnalyticsPage';
import AnalyticsOverview from './components/analyticsPage/analyticsOverview/AnalyticsOverview';
import NewProjectPage from './components/newProjectPage/NewProjectPage';
import NewProjectPlan from './components/newProjectPage/newProjectPlan/NewProjectPlan';

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
            <Route path="recent" element={<HomeRecent />} />
          </Route>
          <Route path="/notifications" element={<NotificationsPage />} >
            <Route index element={<NotificationsOverview />} />
            <Route path="overview" element={<NotificationsOverview />} />
            <Route path="messages" element={<NotificationsOverview />} />
          </Route>
          <Route path="/analytics" element={<AnalyticsPage />} >
            <Route index element={<AnalyticsOverview />} />
            <Route path="overview" element={<AnalyticsOverview />} />
            <Route path="budget" element={<AnalyticsOverview />} />
            <Route path="projects" element={<AnalyticsOverview />} />
          </Route>
          <Route path="/new-project" element={<NewProjectPage />} >
            <Route index element={<NewProjectPlan />} />
            <Route path="plan" element={<NewProjectPlan />} />
            <Route path="design" element={<NewProjectPlan />} />
            <Route path="build" element={<NewProjectPlan />} />
          </Route>
        </Routes>
      </main>
      <RightNavbar />
    </div>
  );
}