import './Tab.css';

export default function Tab({ tab, setCurrentTab })
{
  return (
    <div
      className="home-page-tab page-tab"
      onClick={(event) => setCurrentTab({
        left: event.target.offsetLeft,
        width: event.target.offsetWidth
      })}>
      {tab}
    </div>
  );
}