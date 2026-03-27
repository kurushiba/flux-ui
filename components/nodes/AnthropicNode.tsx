const NODE_COLOR = '#a78bfa';

const ICON = (
  <svg className="node-header-icon" viewBox="0 0 14 14" fill="currentColor">
    <polygon points="7,1 13,12 1,12" opacity="0.4" />
    <polygon points="7,4 11,11 3,11" />
  </svg>
);

export default function AnthropicNode() {
  return (
    <div
      className="workflow-node"
      style={{ '--node-color': NODE_COLOR } as React.CSSProperties}
    >
      <div className="node-header">
        <div className="node-header-left">
          {ICON}
          Anthropic
        </div>
      </div>
      <div className="node-body">
        <span style={{ opacity: 0.7, marginRight: 6, fontSize: 11 }}>claude-sonnet-4-6</span>
        Anthropic
      </div>
    </div>
  );
}
