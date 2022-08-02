import "./TabUnderline.css";

export default function TabUnderline({ currTab })
{
  return (
    <div
      className="tab-underline"
      style={{ width: currTab.barSize, left: currTab.barLeft }} />
  );
}