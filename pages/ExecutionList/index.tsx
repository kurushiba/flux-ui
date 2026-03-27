import { Link } from 'react-router-dom';

import StatusBadge from '../../components/StatusBadge';

import './index.css';

export default function ExecutionList() {
  return (
    <div className="page-content">

      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="btn btn-ghost">
            ← Back to Editor
          </button>
          <h1 className="page-title">Execution History</h1>
        </div>
      </div>

      {/* ローディング中の表示 - コメントインして確認
      <div className="execution-list-empty">Loading...</div>
      */}

      {/* 実行なしの場合 - コメントインして確認（下のtableをコメントアウト）
      <div className="execution-list-empty">
        No executions yet. Run your workflow to get started.
      </div>
      */}

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Started</th>
              <th>Finished</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td><StatusBadge /></td>
              <td className="execution-date">Mar 26, 2026, 10:30:00</td>
              <td className="execution-date">Mar 26, 2026, 10:30:03</td>
              <td className="execution-duration">3.2s</td>
              <td>
                <Link
                  to=""
                  className="btn btn-ghost"
                  style={{ fontSize: 12, padding: '4px 10px', height: 28 }}
                >
                  View Details
                </Link>
              </td>
            </tr>

            <tr>
              <td><StatusBadge /></td>
              <td className="execution-date">Mar 25, 2026, 15:22:10</td>
              <td className="execution-date"><span style={{ opacity: 0.5 }}>—</span></td>
              <td className="execution-duration">—</td>
              <td>
                <Link
                  to=""
                  className="btn btn-ghost"
                  style={{ fontSize: 12, padding: '4px 10px', height: 28 }}
                >
                  View Details
                </Link>
              </td>
            </tr>

            <tr>
              <td><StatusBadge /></td>
              <td className="execution-date">Mar 24, 2026, 09:15:44</td>
              <td className="execution-date">Mar 24, 2026, 09:15:49</td>
              <td className="execution-duration">5.1s</td>
              <td>
                <Link
                  to=""
                  className="btn btn-ghost"
                  style={{ fontSize: 12, padding: '4px 10px', height: 28 }}
                >
                  View Details
                </Link>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
