export default function JsonViewer() {
  return (

    <pre
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        color: 'var(--color-text-secondary)',
        background: 'var(--color-bg)',
        border: '1px solid var(--color-border)',
        borderRadius: 6,
        padding: '10px 12px',
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        margin: 0,
      }}
    >

      {JSON.stringify({ message: "Hello, world!", status: 200, data: { result: "success" } }, null, 2)}
    </pre>
  );
}
