export default function HomeCare({ number, title, image })
{
  return (
    <div className="card-container">
      <div className="card-title-container">
        <p className="card-title-number">
          0{number}. <span className="card-title-bold">{title}</span>
        </p>
      </div>
      <div className="card-image-container">
        <img src={image} alt="card-image" className="card-image" />
      </div>
      <div className="card-button-container">
        <button className="card-button">Get Started</button>
      </div>
    </div>
  );
}