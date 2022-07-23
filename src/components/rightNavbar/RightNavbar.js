import './RightNavbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../../res/padplot_logo.png';

export default function RightNavbar()
{
  const topics = ["Stocks", "Technology", "Business", "Finance", "Real Estate", "Real Estate"];

  return (
    <nav className="right-nav-container">
      <div className="right-nav-logo-container">
        <img src={logo} alt="nav-logo" className="right-nav-logo" />
      </div>
      <div className="right-nav-content-container">
        <div className="right-nav-premium-button-container">
          <button className="right-nav-premium-button">
            Get unlimited access
          </button>
        </div>
        <form className="right-nav-search-form">
          <AiOutlineSearch className="right-nav-search-icon" size={32} />
          <label htmlFor="right-nav-search" className="right-nav-search-label" />
          <input type="text" id="right-nav-search" placeholder="Search" />
        </form>
        <section className="right-nav-news-section">
          <div className="right-nav-title-container">
            <div className="right-nav-title-dot" />
            <h4 className="right-nav-news-title">What's happening in the markets today</h4>
          </div>
        </section>
        <section className="right-nav-recommendations-section">
          <div className="right-nav-title-container">
            <div className="right-nav-title-dot" />
            <h4 className="right-nav-recommendations-title">Recommended topics</h4>
          </div>
          <div className="right-nav-recommendations-container">
            {topics.map((topic, index) =>
            {
              return (
                <div
                  className="recommendations-topic-pill"
                  key={index}
                  title={topic}>
                  {topic}
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </nav >
  );
}