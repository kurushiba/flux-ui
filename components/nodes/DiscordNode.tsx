const NODE_COLOR = '#34d399';

const ICON = (
  <svg className="node-header-icon" viewBox="0 0 14 14" fill="currentColor">
    <path d="M11 3.5C10.1 3.1 9.1 2.9 8 2.8L7.8 3.2C8.8 3.4 9.7 3.8 10.5 4.3C9.4 3.8 8.2 3.5 7 3.5C5.8 3.5 4.6 3.8 3.5 4.3C4.3 3.8 5.2 3.4 6.2 3.2L6 2.8C4.9 2.9 3.9 3.1 3 3.5C1.5 5.8 1 7.8 1.2 9.8C2.3 10.6 3.4 11.1 4.5 11.4L5.1 10.5C4.3 10.2 3.6 9.8 3 9.3C3.5 9.6 4.6 10 6 10.1C6.5 10.1 7 10.2 7 10.2C7 10.2 7.5 10.1 8 10.1C9.4 10 10.5 9.6 11 9.3C10.4 9.8 9.7 10.2 8.9 10.5L9.5 11.4C10.6 11.1 11.7 10.6 12.8 9.8C13 7.8 12.5 5.8 11 3.5Z" opacity="0.8" />
  </svg>
);

export default function DiscordNode() {
  return (
    <div
      className="workflow-node"
      style={{ '--node-color': NODE_COLOR } as React.CSSProperties}
    >
      <div className="node-header">
        <div className="node-header-left">
          {ICON}
          Discord
        </div>
      </div>
      <div className="node-body">
        Discord
      </div>
    </div>
  );
}
