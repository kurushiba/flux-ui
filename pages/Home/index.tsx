import './index.css';

export default function Home() {
  return (
    <div className="page-content">

      <div className="page-header">
        <h1 className="page-title">Workflows</h1>
        <button className="btn-primary">
          + New Workflow
        </button>
      </div>

      {/* 空の場合はこちらをコメントイン（下のgridをコメントアウト）
      <div className="empty-state">
        <p>No workflows yet. Create one to get started.</p>
      </div>
      */}

      <div className="workflow-grid">

        <div className="workflow-card">
          <div className="workflow-card-header">
            <div className="workflow-card-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="4" cy="9" r="2.5" fill="currentColor" />
                <circle cx="14" cy="4" r="2.5" fill="currentColor" />
                <circle cx="14" cy="14" r="2.5" fill="currentColor" />
                <line x1="6.5" y1="8" x2="11.5" y2="5" stroke="currentColor" strokeWidth="1.5" />
                <line x1="6.5" y1="10" x2="11.5" y2="13" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <h3 className="workflow-card-name">Slack Notification Bot</h3>
          <p className="workflow-card-date">Updated Mar 25, 2026</p>
          <div className="workflow-card-actions">
            <button className="btn-ghost btn-sm">Edit</button>
            <button className="btn-ghost btn-sm">History</button>
            <button className="btn-danger btn-sm">Delete</button>
          </div>
        </div>

        <div className="workflow-card">
          <div className="workflow-card-header">
            <div className="workflow-card-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="4" cy="9" r="2.5" fill="currentColor" />
                <circle cx="14" cy="4" r="2.5" fill="currentColor" />
                <circle cx="14" cy="14" r="2.5" fill="currentColor" />
                <line x1="6.5" y1="8" x2="11.5" y2="5" stroke="currentColor" strokeWidth="1.5" />
                <line x1="6.5" y1="10" x2="11.5" y2="13" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <h3 className="workflow-card-name">OpenAI Summarizer</h3>
          <p className="workflow-card-date">Updated Mar 24, 2026</p>
          <div className="workflow-card-actions">
            <button className="btn-ghost btn-sm">Edit</button>
            <button className="btn-ghost btn-sm">History</button>
            <button className="btn-danger btn-sm">Delete</button>
          </div>
        </div>

        <div className="workflow-card">
          <div className="workflow-card-header">
            <div className="workflow-card-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="4" cy="9" r="2.5" fill="currentColor" />
                <circle cx="14" cy="4" r="2.5" fill="currentColor" />
                <circle cx="14" cy="14" r="2.5" fill="currentColor" />
                <line x1="6.5" y1="8" x2="11.5" y2="5" stroke="currentColor" strokeWidth="1.5" />
                <line x1="6.5" y1="10" x2="11.5" y2="13" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <h3 className="workflow-card-name">HTTP Data Fetcher</h3>
          <p className="workflow-card-date">Updated Mar 20, 2026</p>
          <div className="workflow-card-actions">
            <button className="btn-ghost btn-sm">Edit</button>
            <button className="btn-ghost btn-sm">History</button>
            <button className="btn-danger btn-sm">Delete</button>
          </div>
        </div>

      </div>
    </div>
  );
}
