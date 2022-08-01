import './Tab.css';

export default function Tab({ tab, setTabPosition })
{
  return (
    <div
      className="home-page-tab page-tab"
      onClick={(event) => setTabPosition({
        left: event.target.offsetLeft,
        width: event.target.offsetWidth
      })}>
      {tab}
    </div>
  );
}