import './HomePage.css';

export default function HomePage()
{
  const tabs = ["Overview", "Recent"];
  return (
    <div className="home-page-contaner">
      <div className="home-page-tabs-container">
        {tabs.map((tab, index) =>
        {
          return (
            <div className="home-page-tab page-tab" key={index} title={tab}>
              {tab}
            </div>
          )
        })}
      </div>
      <div className="home-page-cards-container">
        Hello from cards
      </div>
      <div className="home-page-report-container">
        Hello from report
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