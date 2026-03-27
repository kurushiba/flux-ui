const NODE_COLOR = '#4a4965';

const ICON = (
  <svg className="node-header-icon" viewBox="0 0 14 14" fill="currentColor">
    <circle cx="7" cy="7" r="5" />
  </svg>
);

export default function InitialNode() {
  return (
    <div
      className="workflow-node"
      style={{ '--node-color': NODE_COLOR } as React.CSSProperties}
    >
      <div className="node-header">
        <div className="node-header-left">
          {ICON}
          Start
        </div>
      </div>
      <div className="node-body">
        Start
      </div>
    </div>
  );
}
