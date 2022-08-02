import './Tab.css';
import { Link } from 'react-router-dom';

export default function Tab({ tab, setCurrTab })
{
  return (
    <Link to={tab.linkPath}>
      <div
        className="home-page-tab page-tab"
        onClick={(event) => setCurrTab({
          title: tab.title,
          linkPath: tab.linkPath,
          barLeft: event.target.offsetLeft,
          barSize: event.target.offsetWidth
        })}>
        {tab.title}
      </div>
    </Link >
  );
}