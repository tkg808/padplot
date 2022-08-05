import "./NotificationsOverview.css";
import { Link } from "react-router-dom";

export default function NotificationsOverview()
{
  const notifications = [];

  return (
    <div className="notifications-overview-container">
      {
        !notifications[0] && (
          <div className="notifications-overview-empty-list-display">
            <div className="notifications-overview-empty-list-message">
              You're all caught up
            </div>
            <Link to="" className="notifications-overview-older-notifications-link">Older notifications</Link>
          </div>
        )

      }
    </div>
  );
}