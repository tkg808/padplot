import './ProjectItem.css';
import { TbFolder } from 'react-icons/tb';

export default function ProjectItem()
{
  return (
    <li className="project-item-container">
      <div className="project-item-icon-container">
        <TbFolder size={20} />
      </div>
      <div className="project-item-title-container">
        Project Title
      </div>
      <div className="project-item-progress-container">
      </div>
    </li>
  );
}