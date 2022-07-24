import './CircleProgressBar.css';

export default function CircleProgressBar(props)
{
  let {
    size = 150,
    progress = 0,
    trackWidth = 10,
    trackColor = "#E1E1E1",
    indicatorWidth = 10,
    indicatorColor = "#006CCF",
    indicatorCap = "round",
    label = `${progress}%`,
  } = props

  const center = size / 2,
    radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - progress) / 100);

  return (
    <div
      className="circle-progress-bar-container"
      style={{ width: size, height: size }}>
      <svg
        className="circle-progress-bar-indicator"
        style={{ width: size, height: size }}>
        <circle
          className="circle-progress-bar-indicator-track"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={trackColor}
          strokeWidth={trackWidth} />
        <circle
          className="circle-progress-bar-indicator-fill"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={indicatorColor}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap} />
      </svg>
      <div className="circle-progress-bar-label">{label}</div>
    </div>
  );
}