
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer = ({ content, className = "" }: MarkdownRendererProps) => {
  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-kashme-black mb-4" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-kashme-black mb-4" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-kashme-black mb-2" {...props} />,
          p: ({ node, ...props }) => <p className="text-kashme-darkgray mb-3" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc list-inside text-kashme-darkgray mb-3 ml-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal list-inside text-kashme-darkgray mb-3 ml-4" {...props} />,
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          a: ({ node, ...props }) => <a className="text-kashme-green hover:underline" {...props} />,
          blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-kashme-green pl-4 italic my-4" {...props} />,
          code: ({ node, inline, ...props }) => 
            inline 
              ? <code className="bg-gray-200 px-1 rounded text-sm" {...props} />
              : <pre className="bg-gray-200 p-4 rounded overflow-x-auto my-4"><code {...props} /></pre>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
