export default function BaseWorkflowNode() {
  return (
    <div
      className="workflow-node"
      style={{ '--node-color': '#4a4965' } as React.CSSProperties}
    >
      <div className="node-header">
        <div className="node-header-left">
          <svg
            className="node-header-icon"
            viewBox="0 0 14 14"
            fill="currentColor"
          >
            <circle cx="7" cy="7" r="4" opacity="0.6" />
          </svg>
          Node Title
        </div>
      </div>

      <div className="node-body">Node Label</div>
    </div>
  );
}
