import './LinearProgressBar.css';

export default function LinearProgressBar(props)
{
  let {
    length = 69,
    trackWidth = 6,
    trackColor = "#D9D9D9",
    progress = (progress > 100 ? 100 : progress),
    indicatorWidth = 6,
    indicatorColor = "#999999",
  } = props;

  return (
    <div className="linear-progress-bar-container">
      <div
        className="linear-progress-bar-track"
        style={{
          width: length,
          height: trackWidth,
          backgroundColor: trackColor
        }}>
        <div
          className="linear-progress-bar-fill"
          style={{
            width: `${progress}%`,
            height: indicatorWidth,
            backgroundColor: indicatorColor
          }} />
      </div>
    </div>
  );
}