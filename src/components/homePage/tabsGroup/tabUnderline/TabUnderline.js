import "./TabUnderline.css";

export default function TabUnderline({ currentTab })
{
  let underlinePosition = Math.max(0, currentTab.left + Math.floor(((currentTab.width - 62) / 2)));

  return (
    <div
      className="tab-underline"
      style={{ left: underlinePosition }} />
  );
}