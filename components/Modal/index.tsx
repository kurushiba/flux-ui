import './index.css';

export default function Modal() {
  return (
    <div className="modal-overlay" onClick={() => {}}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Add Credential</h2>

          <button className="modal-close" onClick={() => {}}>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              width="16"
              height="16"
            >
              <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={() => {}}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input className="form-input" type="text" />
            </div>

            <div className="form-group">
              <label className="form-label">Type</label>
              <select className="form-select">
                <option value="OPENAI">OPENAI</option>
                <option value="ANTHROPIC">ANTHROPIC</option>
                <option value="GEMINI">GEMINI</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">API Key</label>
              <input className="form-input" type="password" />
            </div>

            <div className="modal-footer">
              <button type="button" className="btn-ghost" onClick={() => {}}>
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Save Credential
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
