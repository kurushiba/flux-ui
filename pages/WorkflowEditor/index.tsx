import './index.css';

// ノードコンポーネントのUIを確認する場合は下記をコメントイン:
// import InitialNode from '../../components/nodes/InitialNode';
// import HttpRequestNode from '../../components/nodes/HttpRequestNode';
// import OpenAINode from '../../components/nodes/OpenAINode';
// import AnthropicNode from '../../components/nodes/AnthropicNode';
// import GeminiNode from '../../components/nodes/GeminiNode';
// import DiscordNode from '../../components/nodes/DiscordNode';
// import SlackNode from '../../components/nodes/SlackNode';

import EditorHeader from './EditorHeader';
import NodePalette from './NodePalette';
import NodeConfigPanel from './NodeConfigPanel';

export default function WorkflowEditor() {
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
