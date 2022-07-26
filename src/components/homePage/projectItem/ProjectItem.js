import './ProjectItem.css';
import { TbFolder } from 'react-icons/tb';
import LinearProgressBar from '../linearProgressBar/LinearProgressBar';

export default function ProjectItem({ title, progress })
{
  return (
    <li className="project-item-container">
      <div className="project-item-icon-container">
        <TbFolder size={20} />
      </div>
      <div className="project-item-title-container">
        {title}
      </div>
      <div className="project-item-progress-container">
        <LinearProgressBar progress={progress} />
      </div>
    </li>
  );
}