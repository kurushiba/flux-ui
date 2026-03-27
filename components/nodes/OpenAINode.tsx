const NODE_COLOR = '#a78bfa';

const ICON = (
  <svg className="node-header-icon" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 1.5a5.5 5.5 0 0 1 3.89 9.39L7 14l-3.89-3.11A5.5 5.5 0 0 1 7 1.5z" opacity="0.4" />
    <circle cx="7" cy="7" r="2" />
  </svg>
);

export default function OpenAINode() {
  return (
    <div
      className="workflow-node"
      style={{ '--node-color': NODE_COLOR } as React.CSSProperties}
    >
      <div className="node-header">
        <div className="node-header-left">
          {ICON}
          OpenAI
        </div>
      </div>
      <div className="node-body">
        <span style={{ opacity: 0.7, marginRight: 6, fontSize: 11 }}>gpt-4o</span>
        OpenAI
      </div>
    </div>
  );
}
