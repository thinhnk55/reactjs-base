import React from "react";

interface JsonHighlighterProps {
  data: unknown;
  indent?: number;
  className?: string;
}

const JsonHighlighter: React.FC<JsonHighlighterProps> = ({
  data,
  indent = 2,
  className = "",
}) => {
  // Convert the data to a formatted JSON string
  const jsonString = React.useMemo(() => {
    try {
      return JSON.stringify(data, null, indent);
    } catch (error) {
      console.error("Error stringifying JSON:", error);
      return String(error);
    }
  }, [data, indent]);

  // Syntax highlight the JSON
  const highlightedJson = React.useMemo(() => {
    return jsonString.split("\n").map((line, i) => {
      const tokens = line.split(
        /("(?:\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g
      );

      return (
        <div key={i} className="whitespace-pre-wrap break-all">
          {tokens.map((token, index) => {
            // Skip empty tokens
            if (!token) return null;

            let className = "";

            // Determine token type and assign appropriate class
            if (/^".*":$/.test(token)) {
              className = "text-violet-700 font-medium"; // key
            } else if (/^"/.test(token)) {
              className = "text-green-600"; // string
            } else if (/true|false/.test(token)) {
              className = "text-red-600"; // boolean
            } else if (/null/.test(token)) {
              className = "text-gray-500"; // null
            } else if (/^-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?$/.test(token)) {
              className = "text-blue-600"; // number
            }

            return (
              <span key={index} className={className}>
                {token}
              </span>
            );
          })}
        </div>
      );
    });
  }, [jsonString]);

  return (
    <pre className={`w-full bg-gray-50 font-mono ${className}`}>
      <code className="block w-full">{highlightedJson}</code>
    </pre>
  );
};

export default JsonHighlighter;
