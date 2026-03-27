const NODE_COLOR = '#34d399';

const ICON = (
  <svg className="node-header-icon" viewBox="0 0 14 14" fill="currentColor">
    <rect x="2" y="5.5" width="4" height="4" rx="1" opacity="0.4" />
    <rect x="8" y="5.5" width="4" height="4" rx="1" opacity="0.4" />
    <rect x="5.5" y="2" width="3" height="3" rx="1" />
    <rect x="5.5" y="9" width="3" height="3" rx="1" />
  </svg>
);

export default function SlackNode() {
  return (
    <div
      className="workflow-node"
      style={{ '--node-color': NODE_COLOR } as React.CSSProperties}
    >
      <div className="node-header">
        <div className="node-header-left">
          {ICON}
          Slack
        </div>
      </div>
      <div className="node-body">
        Slack
      </div>
    </div>
  );
}
