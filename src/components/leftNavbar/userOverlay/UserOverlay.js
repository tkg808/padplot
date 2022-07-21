import './UserOverlay.css';

export default function UserOverlay()
{

  return (
    <div className="user-overlay-container">
      <div className="user-overlay-section user-overlay-top-section">
        <div className="user-overlay-item">My projects</div>
        <div className="user-overlay-item">Become a member</div>
      </div>
      <div className="user-overlay-section user-overlay-middle-section">
        <div className="user-overlay-item">Find contractors</div>
        <div className="user-overlay-item">Market news</div>
        <div className="user-overlay-item">Stats</div>
        <div className="user-overlay-item">Settings</div>
      </div>
      <div className="user-overlay-section user-overlay-bottom-section">
        <div className="user-overlay-item">Sign up</div>
      </div>
    </div>
  );
}