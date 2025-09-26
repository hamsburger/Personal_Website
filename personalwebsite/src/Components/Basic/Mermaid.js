import mermaid from 'mermaid';
import { useEffect } from 'react';

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose",
})

const MermaidDiagram = ({ props }) => {
    useEffect(() => {        
        mermaid.contentLoaded()
    })

    return <div className="mermaid">{props.chart}</div>
};

export default MermaidDiagram;