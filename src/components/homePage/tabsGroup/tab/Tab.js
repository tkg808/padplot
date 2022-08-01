import './Tab.css';
import { Link } from 'react-router-dom';

export default function Tab({ tab, setCurrentTab })
{
  return (
    <Link to={tab.linkPath}>
      <div
        className="home-page-tab page-tab"
        onClick={(event) => setCurrentTab({
          left: event.target.offsetLeft,
          width: event.target.offsetWidth
        })}>
        {tab.title}
      </div>
    </Link>
  );
}