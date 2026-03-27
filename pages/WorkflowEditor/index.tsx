import './index.css';

// ノードコンポーネントのUIを確認する場合は下記をコメントイン:
// import InitialNode from '../../components/nodes/InitialNode';
// import HttpRequestNode from '../../components/nodes/HttpRequestNode';
// import OpenAINode from '../../components/nodes/OpenAINode';
// import AnthropicNode from '../../components/nodes/AnthropicNode';
// import GeminiNode from '../../components/nodes/GeminiNode';
// import DiscordNode from '../../components/nodes/DiscordNode';
// import SlackNode from '../../components/nodes/SlackNode';

function EditorHeader() {
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

function NodePalette() {
  return (
    <div className="node-palette">

      <div className="palette-section">
        <h4 className="palette-section-title">Actions</h4>

        <div
          className="palette-item"
          style={{ '--node-color': '#60a5fa' } as React.CSSProperties}
        >
          <div className="palette-item-dot" />
          HTTP Request
        </div>

        <div
          className="palette-item"
          style={{ '--node-color': '#a78bfa' } as React.CSSProperties}
        >
          <div className="palette-item-dot" />
          OpenAI
        </div>

        <div
          className="palette-item"
          style={{ '--node-color': '#a78bfa' } as React.CSSProperties}
        >
          <div className="palette-item-dot" />
          Anthropic
        </div>

        <div
          className="palette-item"
          style={{ '--node-color': '#a78bfa' } as React.CSSProperties}
        >
          <div className="palette-item-dot" />
          Gemini
        </div>

        <div
          className="palette-item"
          style={{ '--node-color': '#34d399' } as React.CSSProperties}
        >
          <div className="palette-item-dot" />
          Discord
        </div>

        <div
          className="palette-item"
          style={{ '--node-color': '#34d399' } as React.CSSProperties}
        >
          <div className="palette-item-dot" />
          Slack
        </div>
      </div>
    </div>
  );
}

function NodeConfigPanel() {
  // 表示するノードタイプを切り替えてUIを確認できます
  // HTTP_REQUEST パネルを表示中（下のコメントで他タイプに切り替え）

  return (
    <div className="node-config-panel visible">

      <>
        <div className="config-panel-header">
          <h3 className="config-panel-title">HTTP Request</h3>
          <div style={{ display: 'flex', gap: 6 }}>
            <button className="btn-danger btn-sm">
              Delete
            </button>
            <button className="btn-ghost btn-sm">
              ✕
            </button>
          </div>
        </div>

        <div className="config-panel-body">

          <div className="form-group">
            <label className="form-label">Label</label>
            <input
              className="form-input"
              type="text"
              defaultValue="HTTP Request"
            />
          </div>

          {/* HTTP_REQUEST 設定パネル */}
          <>
            <div className="form-group">
              <label className="form-label">Method</label>
              <select className="form-select" defaultValue="GET">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="PATCH">PATCH</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">URL</label>
              <input
                className="form-input"
                type="text"
                defaultValue=""
                placeholder="https://api.example.com/{{data}}"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Body (JSON / Handlebars)</label>
              <textarea
                className="form-control"
                defaultValue=""
                placeholder={'{"key": "{{value}}"}'}
                rows={4}
              />
            </div>
          </>

          {/* OPENAI / ANTHROPIC / GEMINI 設定パネルを確認する場合はコメントイン（上のHTTP_REQUESTをコメントアウト）
          <>
            <div className="form-group">
              <label className="form-label">Credential</label>
              <select className="form-select" defaultValue="">
                <option value="">-- Select credential --</option>
                <option value="cred-1">My OpenAI Key</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Model</label>
              <select className="form-select" defaultValue="gpt-4o">
                <option value="gpt-4o">gpt-4o</option>
                <option value="gpt-4o-mini">gpt-4o-mini</option>
                <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Prompt</label>
              <textarea
                className="form-control"
                defaultValue=""
                placeholder="Use {{previousOutput}} for previous node result"
                rows={5}
              />
            </div>
          </>
          */}

          {/* DISCORD / SLACK 設定パネルを確認する場合はコメントイン（上のHTTP_REQUESTをコメントアウト）
          <>
            <div className="form-group">
              <label className="form-label">Webhook URL</label>
              <input
                className="form-input"
                type="text"
                defaultValue=""
                placeholder="https://hooks.discord.com/…"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                defaultValue=""
                placeholder="{{previousOutput}}"
                rows={4}
              />
            </div>
          </>
          */}

        </div>
      </>

    </div>
  );
}

function WorkflowEditorContent() {
  return (
    <div className="editor-layout">

      <EditorHeader />

      <div className="editor-body">

        <NodePalette />

        <div className="react-flow-wrapper">
          {/* ReactFlowキャンバス（@xyflow/react削除のためプレースホルダー） */}
          {/* ノードコンポーネントのUIを単体で確認する場合はコメントイン:
          <div style={{ display: 'flex', gap: 20, padding: 20, flexWrap: 'wrap' }}>
            <InitialNode />
            <HttpRequestNode />
            <OpenAINode />
            <AnthropicNode />
            <GeminiNode />
            <DiscordNode />
            <SlackNode />
          </div>
          */}
        </div>

        <NodeConfigPanel />

      </div>
    </div>
  );
}

export default function WorkflowEditor() {
  return <WorkflowEditorContent />;
}
