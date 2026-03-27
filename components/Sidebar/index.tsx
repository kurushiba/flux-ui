import { NavLink } from 'react-router-dom';

import './index.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="2" width="7" height="7" rx="2" fill="#6366f1" />
          <rect x="11" y="2" width="7" height="7" rx="2" fill="#22d3ee" />
          <rect x="2" y="11" width="7" height="7" rx="2" fill="#22d3ee" />
          <rect x="11" y="11" width="7" height="7" rx="2" fill="#6366f1" />
        </svg>
        Flux
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" className="nav-item">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="1" y="1" width="6" height="6" rx="1.5" />
            <rect x="9" y="1" width="6" height="6" rx="1.5" />
            <rect x="1" y="9" width="6" height="6" rx="1.5" />
            <rect x="9" y="9" width="6" height="6" rx="1.5" />
          </svg>
          Workflows
        </NavLink>

        <NavLink to="/credentials" className="nav-item">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="6" cy="8" r="3.5" />
            <path d="M9.5 8h5M12 6v4" strokeLinecap="round" />
          </svg>
          Credentials
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="8" cy="5" r="3" />
            <path
              d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6"
              strokeLinecap="round"
            />
          </svg>

          <span>John Doe</span>
        </div>

        <button className="nav-item" onClick={() => {}}>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M6 3H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3M10 11l3-3-3-3M13 8H6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Logout
        </button>
      </div>
    </aside>
  );
}
