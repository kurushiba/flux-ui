export default function EditorHeader() {
  return (
    <div className="editor-header">

      <div className="editor-header-left">

        <button className="btn-ghost btn-sm">
          ← Workflows
        </button>

        <span className="editor-divider" />

        {/* 名前編集中の状態を確認する場合はコメントイン（下のspanをコメントアウト）
        <input
          className="editor-name-input"
          defaultValue="Slack Notification Bot"
          autoFocus
        />
        */}

        <span className="editor-name" title="Click to rename">
          Slack Notification Bot
        </span>
      </div>

      <div className="editor-header-right">

        <button className="btn-ghost btn-sm">
          History
        </button>

        <button className="btn-secondary btn-sm">
          ▶ Run
        </button>

        <button className="btn-primary btn-sm">
          Save
        </button>

        {/* 保存中の状態を確認する場合はコメントイン（上のSaveボタンをコメントアウト）
        <button className="btn-primary btn-sm" disabled>
          Saving…
        </button>
        */}
      </div>
    </div>
  );
}
