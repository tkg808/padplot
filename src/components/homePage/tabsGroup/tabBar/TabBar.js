import "./TabBar.css";

export default function TabBar({ currTab })
{
  return (
    <div
      className="tab-bar"
      style={{ width: currTab.barSize, left: currTab.barLeft }} />
  );
}