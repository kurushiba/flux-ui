import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="auth-layout">
      <div className="auth-card">
        <div className="auth-logo">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="2" width="7" height="7" rx="2" fill="#6366f1" />
            <rect x="11" y="2" width="7" height="7" rx="2" fill="#22d3ee" />
            <rect x="2" y="11" width="7" height="7" rx="2" fill="#22d3ee" />
            <rect x="11" y="11" width="7" height="7" rx="2" fill="#6366f1" />
          </svg>
          Flux
        </div>

        <h1 className="auth-title">Create an account</h1>
        <p className="auth-subtitle">Start automating your workflows</p>

        <form className="auth-form">
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="form-input"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="form-input"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form-input"
              type="password"
              placeholder="Your password"
              required
            />
          </div>

          <button className="btn-primary auth-submit" type="submit">
            Create account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="" className="auth-link">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
