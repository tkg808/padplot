import "./HomeRecent.css";

export default function HomeRecent({ recentProjects = [] })
{
  return (
    <div className="home-recent-container">
      <ul className="home-recent-projects-container">
        {
          recentProjects[0] ?
            recentProjects.map((project, index) =>
            {
              return (
                <li key={index} className="home-recent-project-item">Project {index + 1}</li>
              )
            }) :
            "No recent projects"
        }
      </ul>
    </div>
  );
}