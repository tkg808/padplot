import './HomeOverview.css';
import { Link } from 'react-router-dom';
import plan_image from '../../../res/plan_image.svg';
import design_image from '../../../res/design_image.svg';
import build_image from '../../../res/build_image.svg';
import { IoCaretDownSharp } from 'react-icons/io5';
import HomeCard from './homeCard/HomeCard';
import CircleProgressBar from './circleProgressBar/CircleProgressBar';
import ProjectItem from './projectItem/ProjectItem';

export default function HomeOverview()
{
  const cards =
    [
      { title: "Plan", image: plan_image },
      { title: "Design", image: design_image },
      { title: "Build", image: build_image },
    ];

  const projects =
    [
      { title: "Project one", progress: 60 },
      { title: "Project two", progress: 25 },
    ];

  return (
    <div className="home-overview-container">
      <div className="home-overview-cards-container">
        {
          cards.map((card, index) => 
          {
            return (<HomeCard
              number={index + 1}
              title={card.title}
              image={card.image}
              key={index} />
            );
          })
        }
      </div>
      <div className="home-overview-report-container">
        <div className="home-overview-report-top-row-container">
          <div className="home-overview-report-top-left-container">
            <div className="home-overview-report-total-home-value-title">
              Total home value
            </div>
            <div className="home-overview-report-total-home-value">
              $<span className="home-overview-report-total-home-value">0.00</span>
            </div>
          </div>
          <div className="home-overview-report-top-right-container">
            <div className="home-overview-report-delta-container">
              + <span className="home-overview-report-delta">0.00</span>%
            </div>
            <div className="home-overview-report-full-link-container">
              <Link to="" className="home-overview-report-full-link">View Full Report</Link>
            </div>
          </div>
        </div>
        <div className="home-overview-report-dropdown-container">
          Choose project <IoCaretDownSharp className="home-overview-report-dropdown-arrow-icon" />
        </div>
        <div className="home-overview-report-info-container">
          <div className="home-overview-report-info"></div>
          <div className="home-overview-report-info"></div>
          <div className="home-overview-report-info"></div>
          <div className="home-overview-report-info"></div>
        </div>
      </div>
      <div className="home-overview-bottom-container">
        <div className="home-overview-budget-container">
          <div className="home-overview-budget-header-container">
            <div className="home-overview-budget-title-container">
              % of Budget
            </div>
            <div className="home-overview-report-full-link-container">
              <Link to="" className="home-overview-report-full-link">View Full Report</Link>
            </div>
          </div>
          <CircleProgressBar progress={25} />
        </div>
        <div className="home-overview-tracker-container">
          <div className="home-overview-tracker-header-container">
            <div className="home-overview-tracker-header-title-container">
              Project tracker
            </div>
            <div className="home-overview-report-full-link-container">
              <Link to="" className="home-overview-report-full-link">View Full Report</Link>
            </div>
          </div>
          <div className="home-overview-project-list-container">
            <ul className="home-overview-project-list">
              {
                projects.map((project, index) => 
                {
                  return (<ProjectItem
                    key={index}
                    title={project.title}
                    progress={project.progress} />);
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
}