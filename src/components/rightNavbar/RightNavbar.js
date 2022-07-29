import './RightNavbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../../res/padplot_logo.svg';

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
        <div className="right-nav-search-form-container">
          <form className="right-nav-search-form">
            <AiOutlineSearch className="right-nav-search-icon" size={32} />
            <label htmlFor="right-nav-search" className="right-nav-search-label" />
            <input type="text" id="right-nav-search" placeholder="Search" />
          </form>
        </div>
        <section className="right-nav-news-section">
          <div className="right-nav-title-container">
            <div className="right-nav-title-dot" />
            What's happening in the markets today
          </div>
        </section>
        <section className="right-nav-recommendations-section">
          <div className="right-nav-title-container">
            <div className="right-nav-title-dot" />
            Recommended topics
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