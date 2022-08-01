import "./TabsGroup.css";
import { useState } from 'react';
import Tab from './tab/Tab';
import TabUnderline from './tabUnderline/TabUnderline';

export default function TabsGroup({ tabsList })
{
  const [currentTab, setCurrentTab] = useState({
    left: 0,
    width: 0
  });

  return (
    <div className="tabs-group-container">
      {
        tabsList.map((tab, index) =>
        {
          return <Tab
            key={index}
            tab={tab}
            setCurrentTab={setCurrentTab} />
        })
      }
      <TabUnderline currentTab={currentTab} />
    </div>
  );
}