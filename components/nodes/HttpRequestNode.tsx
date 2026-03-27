const NODE_COLOR = '#60a5fa';

const ICON = (
  <svg className="node-header-icon" viewBox="0 0 14 14" fill="currentColor">
    <circle cx="4" cy="7" r="2.5" opacity="0.4" />
    <circle cx="10" cy="7" r="2.5" opacity="0.4" />
    <line x1="6.5" y1="7" x2="7.5" y2="7" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default function HttpRequestNode() {
  return (
    <div
      className="workflow-node"
      style={{ '--node-color': NODE_COLOR } as React.CSSProperties}
    >
      <div className="node-header">
        <div className="node-header-left">
          {ICON}
          HTTP Request
        </div>
      </div>
      <div className="node-body">
        <span style={{ opacity: 0.7, marginRight: 6, fontSize: 11 }}>GET</span>
        HTTP Request
      </div>
    </div>
  );
}
