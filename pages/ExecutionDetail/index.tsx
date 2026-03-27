import StatusBadge from '../../components/StatusBadge';

import './index.css';

// ノード展開状態のUIを確認する場合は下記をコメントイン:
// import JsonViewer from '../../components/JsonViewer';

function NodeExecutionItem() {
  // 展開状態を確認する場合: expanded = true にする（下のbodyコメントをコメントイン）
  const expanded = false;

  return (
    <div className="node-exec-item success">

      <div className="node-exec-header" onClick={() => {}}>

        <div className="node-exec-left">
          <span className="node-exec-chevron">{expanded ? '▾' : '▸'}</span>
          <StatusBadge />
          <span className="node-exec-name">HTTP Request</span>
        </div>

        <div className="node-exec-meta">
          <span>Mar 26, 2026, 10:30:01</span>
          <span className="node-exec-duration">1.2s</span>
        </div>
      </div>

      {/* 展開状態を確認する場合はコメントイン（expanded = true にした場合）
      {expanded && (
        <div className="node-exec-body">
          <div className="node-exec-io">
            <div className="node-exec-io-section">
              <div className="node-exec-io-label">Input</div>
              <JsonViewer />
            </div>
            <div className="node-exec-io-section">
              <div className="node-exec-io-label">Output</div>
              <JsonViewer />
            </div>
          </div>
        </div>
      )}
      */}
    </div>
  );
}

export default function ExecutionDetail() {

  /* ローディング状態を確認する場合はコメントイン
  return (
    <div className="page-content">
      <div className="execution-list-empty">Loading...</div>
    </div>
  );
  */

  /* 実行が見つからない場合を確認する場合はコメントイン
  return (
    <div className="page-content">
      <div className="execution-list-empty">Execution not found.</div>
    </div>
  );
  */

  return (
    <div className="page-content">

      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="btn btn-ghost">
            ← Back to History
          </button>
          <h1 className="page-title">Execution Detail</h1>
        </div>
      </div>

      <div className="exec-summary">
        <div className="exec-summary-row">
          <span className="exec-summary-label">Status</span>
          <StatusBadge />
        </div>
        <div className="exec-summary-row">
          <span className="exec-summary-label">Started</span>
          <span className="exec-summary-value">Mar 26, 2026, 10:30:00</span>
        </div>
        <div className="exec-summary-row">
          <span className="exec-summary-label">Finished</span>
          <span className="exec-summary-value">Mar 26, 2026, 10:30:03</span>
        </div>
        <div className="exec-summary-row">
          <span className="exec-summary-label">Duration</span>
          <span className="exec-summary-value">3.2s</span>
        </div>
      </div>

      <div className="exec-nodes-section">
        <h2 className="exec-nodes-title">Node Executions</h2>

        {/* ノードなしの場合を確認する場合はコメントイン（下のlistをコメントアウト）
        <div className="execution-list-empty" style={{ paddingTop: 24 }}>
          No nodes executed yet.
        </div>
        */}

        <div className="exec-nodes-list">
          <NodeExecutionItem />
          <NodeExecutionItem />
          <NodeExecutionItem />
        </div>
      </div>
    </div>
  );
}
