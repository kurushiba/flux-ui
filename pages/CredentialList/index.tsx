import StatusBadge from '../../components/StatusBadge';

import './index.css';

// モーダルのUIを確認する場合は下記をコメントイン:
// import Modal from '../../components/Modal';

export default function CredentialList() {
  return (
    <div className="page-content">

      <div className="page-header">
        <h1 className="page-title">Credentials</h1>
        <button className="btn-primary">
          + Add Credential
        </button>
      </div>

      {/* 空の場合はこちらをコメントイン（下のtableをコメントアウト）
      <div className="empty-state">
        <p>No credentials yet. Add one to get started.</p>
      </div>
      */}

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>My OpenAI Key</td>
            <td><StatusBadge /></td>
            <td>Mar 25, 2026</td>
            <td className="actions-cell">
              <button className="btn-ghost btn-sm">Edit</button>
              <button className="btn-danger btn-sm">Delete</button>
            </td>
          </tr>

          <tr>
            <td>Anthropic Production</td>
            <td><StatusBadge /></td>
            <td>Mar 20, 2026</td>
            <td className="actions-cell">
              <button className="btn-ghost btn-sm">Edit</button>
              <button className="btn-danger btn-sm">Delete</button>
            </td>
          </tr>

          <tr>
            <td>Gemini API</td>
            <td><StatusBadge /></td>
            <td>Mar 15, 2026</td>
            <td className="actions-cell">
              <button className="btn-ghost btn-sm">Edit</button>
              <button className="btn-danger btn-sm">Delete</button>
            </td>
          </tr>

        </tbody>
      </table>

      {/* モーダルを確認する場合はコメントイン
      <Modal />
      */}
    </div>
  );
}
