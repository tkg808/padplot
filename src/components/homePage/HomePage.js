import './HomePage.css';
import { Link } from 'react-router-dom';
import HomeCard from './homeCard/HomeCard';
import plan_image from '../../res/plan_image.png';
import design_image from '../../res/design_image.png';
import build_image from '../../res/build_image.png';
import { IoCaretDownSharp } from 'react-icons/io5';

export default function HomePage()
{
  const tabs = ["Overview", "Recent"];
  const cards =
    [
      { title: "Plan", image: plan_image },
      { title: "Design", image: design_image },
      { title: "Build", image: build_image },
    ];

  return (
    <div className="home-page-contaner">
      <div className="home-page-tabs-container">
        {
          tabs.map((tab, index) =>
          {
            return (
              <div className="home-page-tab page-tab" key={index} title={tab}>
                {tab}
              </div>
            );
          })
        }
      </div>
      <div className="home-page-cards-container">
        {
          cards.map((card, index) => 
          {
            return (<HomeCard
              number={index + 1}
              title={card.title}
              image={card.image} />
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
          Hello from tabs
        </div>
        <div className="home-page-tracker-container">
          Hello from tabs
        </div>
      </div>
    </div>
  );
}