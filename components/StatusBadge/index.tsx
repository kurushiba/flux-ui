import './index.css';

// 表示するバッジタイプをreturn文を切り替えて確認:
// 'OPENAI' | 'ANTHROPIC' | 'GEMINI' | 'SUCCESS' | 'FAILED' | 'RUNNING'

export default function StatusBadge() {

  // SUCCESS
  return <span className="badge badge-success">SUCCESS</span>;

  /* FAILED: コメントイン（上をコメントアウト）
  return <span className="badge badge-error">FAILED</span>;
  */

  /* RUNNING: コメントイン（上をコメントアウト）
  return <span className="badge badge-running">RUNNING</span>;
  */

  /* OPENAI: コメントイン（上をコメントアウト）
  return <span className="badge badge-accent">OPENAI</span>;
  */

  /* ANTHROPIC: コメントイン（上をコメントアウト）
  return <span className="badge badge-primary">ANTHROPIC</span>;
  */

  /* GEMINI: コメントイン（上をコメントアウト）
  return (
    <span className="badge" style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa' }}>
      GEMINI
    </span>
  );
  */
}
