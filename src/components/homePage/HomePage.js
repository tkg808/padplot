import './HomePage.css';
import HomeCard from './homeCard/HomeCard';
import plan_image from '../../res/plan_image.png';
import design_image from '../../res/design_image.png';
import build_image from '../../res/build_image.png';

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

        </div>
        <div className="home-page-report-dropdown-container">

        </div>
        <div className="home-page-report-info-container">

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