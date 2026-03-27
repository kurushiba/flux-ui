const NODE_COLOR = '#a78bfa';

const ICON = (
  <svg className="node-header-icon" viewBox="0 0 14 14" fill="currentColor">
    <path d="M7 1 L9 6 L14 7 L9 8 L7 13 L5 8 L0 7 L5 6 Z" opacity="0.6" />
  </svg>
);

export default function GeminiNode() {
  return (
    <div
      className="workflow-node"
      style={{ '--node-color': NODE_COLOR } as React.CSSProperties}
    >
      <div className="node-header">
        <div className="node-header-left">
          {ICON}
          Gemini
        </div>
      </div>
      <div className="node-body">
        <span style={{ opacity: 0.7, marginRight: 6, fontSize: 11 }}>gemini-2.0-flash</span>
        Gemini
      </div>
    </div>
  );
}
