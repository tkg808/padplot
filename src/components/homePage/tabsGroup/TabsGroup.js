import "./TabsGroup.css";
import Tab from './tab/Tab';
import TabBar from './tabBar/TabBar';

export default function TabsGroup({ tabsList, currTab, setCurrTab })
{
  return (
    <div className="tabs-group-container">
      {
        tabsList.map((tab, index) =>
        {
          return <Tab
            key={index}
            tab={tab}
            setCurrTab={setCurrTab} />
        })
      }
      <TabBar currTab={currTab} />
    </div>
  );
}