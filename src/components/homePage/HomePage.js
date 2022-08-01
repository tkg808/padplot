import './HomePage.css';
import { Link } from 'react-router-dom';
import { TbPlus } from 'react-icons/tb';
import HomeCard from './homeCard/HomeCard';
import plan_image from '../../res/plan_image.svg';
import design_image from '../../res/design_image.svg';
import build_image from '../../res/build_image.svg';
import { IoCaretDownSharp } from 'react-icons/io5';
import CircleProgressBar from './circleProgressBar/CircleProgressBar';
import ProjectItem from './projectItem/ProjectItem';
import TabsGroup from './tabsGroup/TabsGroup';

export default function HomePage()
{
  const homeTabs = ["Overview", "Review"];

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
    <div className="home-page-contaner">
      <div className="home-page-tabs-row-container">
        <TabsGroup tabsList={homeTabs} />
        <div className="home-page-new-project-button-container">
          <button className="home-page-new-project-button">
            <TbPlus
              className="home-page-new-project-button-plus-icon"
              size={24} /> New Project
          </button>
        </div>
      </div>
      <div className="home-page-cards-container">
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
      <div className="home-page-report-container">
        <div className="home-page-report-top-row-container">
          <div className="home-page-report-top-left-container">
            <div className="home-page-report-total-home-value-title">
              Total home value
            </div>
            <div className="home-page-report-total-home-value">
              $<span className="home-page-report-total-home-value">0.00</span>
            </div>
          </div>
          <div className="home-page-report-top-right-container">
            <div className="home-page-report-delta-container">
              + <span className="home-page-report-delta">0.00</span>%
            </div>
            <div className="home-page-report-full-link-container">
              <Link to="" className="home-page-report-full-link">View Full Report</Link>
            </div>
          </div>
        </div>
        <div className="home-page-report-dropdown-container">
          Choose project <IoCaretDownSharp className="home-page-report-dropdown-arrow-icon" />
        </div>
        <div className="home-page-report-info-container">
          <div className="home-page-report-info"></div>
          <div className="home-page-report-info"></div>
          <div className="home-page-report-info"></div>
          <div className="home-page-report-info"></div>
        </div>
      </div>
      <div className="home-page-bottom-container">
        <div className="home-page-budget-container">
          <div className="home-page-budget-header-container">
            <div className="home-page-budget-title-container">
              % of Budget
            </div>
            <div className="home-page-report-full-link-container">
              <Link to="" className="home-page-report-full-link">View Full Report</Link>
            </div>
          </div>
          <CircleProgressBar progress={25} />
        </div>
        <div className="home-page-tracker-container">
          <div className="home-page-tracker-header-container">
            <div className="home-page-tracker-header-title-container">
              Project tracker
            </div>
            <div className="home-page-report-full-link-container">
              <Link to="" className="home-page-report-full-link">View Full Report</Link>
            </div>
          </div>
          <div className="home-page-project-list-container">
            <ul className="home-page-project-list">
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