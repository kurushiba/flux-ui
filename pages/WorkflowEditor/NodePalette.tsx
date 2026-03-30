export default function NodePalette() {
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
