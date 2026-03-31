export default function NodeConfigPanel() {
  // 表示するノードタイプを切り替えてUIを確認できます
  // HTTP_REQUEST パネルを表示中（下のコメントで他タイプに切り替え）

  return (
    <div className="node-config-panel visible">
      <>
        <div className="config-panel-header">
          <h3 className="config-panel-title">HTTP Request</h3>
          <div style={{ display: 'flex', gap: 6 }}>
            <button className="btn-danger btn-sm">Delete</button>
            <button className="btn-ghost btn-sm">✕</button>
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
                <option value="gpt-5.4-nano">gpt-5.4-nano</option>
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
