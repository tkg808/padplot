import "./TabsGroup.css";
import Tab from './tab/Tab';

export default function TabsGroup({ tabsList, currTab, setCurrTab })
{
  return (
    <div className="tabs-group-container" data-testid="tabs-group-container">
      {
        tabsList.map((tab, index) =>
        {
          return <Tab
            key={index}
            tab={tab}
            setCurrTab={setCurrTab} />
        })
      }
      <div
        className="tab-bar"
        style={{ width: currTab.barSize, left: currTab.barLeft }} />
    </div>
  );
}