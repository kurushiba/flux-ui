function ExecutionStatusOverlay() {
  // 実行ステータスのUIを確認する場合はコメントイン（1つだけコメントインして確認）

  // null（ステータスなし）: 何も表示しない
  return null;

  /* running（実行中）:
  return (
    <div className="node-exec-overlay">
      <span className="node-exec-ping" />
      <div className="node-exec-spinner" />
    </div>
  );
  */

  /* success（成功）:
  return <div className="node-exec-badge node-exec-badge--success">✓</div>;
  */

  /* failed（失敗）:
  return <div className="node-exec-badge node-exec-badge--failed">✗</div>;
  */
}

export default function BaseWorkflowNode() {
  return (
    <div
      className="workflow-node"
      style={{ '--node-color': '#4a4965' } as React.CSSProperties}
    >

      <div className="node-header">
        <div className="node-header-left">
          <svg className="node-header-icon" viewBox="0 0 14 14" fill="currentColor">
            <circle cx="7" cy="7" r="4" opacity="0.6" />
          </svg>
          Node Title
        </div>
      </div>

      <div className="node-body">
        Node Label
      </div>

      <ExecutionStatusOverlay />
    </div>
  );
}
