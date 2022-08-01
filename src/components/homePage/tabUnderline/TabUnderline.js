import "./TabUnderline.css";

export default function TabUnderline({ tabPosition })
{
  const underlinePosition = Math.max(0, tabPosition.left + ((tabPosition.width - 62) / 2));

  return (
    <div
      className="tab-underline"
      style={{ left: underlinePosition }} />
  );
}