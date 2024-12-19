import {
  JsonView,
  allExpanded,
  darkStyles,
  defaultStyles,
} from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import formatHighlight from "json-format-highlight";

interface Translation {
  origin: string;
  translated: string;
}

interface Term {
  seed: string;
  explanation: string;
  translation: Translation;
  example: string;
}
interface TermsData {
  terms: Term[];
}
const json: TermsData = {
  terms: [
    {
      seed: "devastating",
      explanation:
        "The term 'devastating' refers to something that causes severe and overwhelming destruction or damage. In this context, it describes the significant harm and impact of the war in Ukraine.",
      translation: {
        origin: "devastating",
        translated: "tàn phá",
      },
      example:
        "Little is known about the North Korean troops deployed to support Russia in its devastating yearslong war in Ukraine.",
    },
  ],
};

export const JsonViewDemo: React.FC = () => {
  return (
    <div className="bg-amber-100 w-96 rounded-sm shadow-sm p-4 flex flex-col items-center">
      <div>{formatHighlight(json, colorOptions)}</div>
      <JsonView
        data={json}
        shouldExpandNode={allExpanded}
        style={defaultStyles}
      />
      <JsonView data={json} shouldExpandNode={allExpanded} style={darkStyles} />
    </div>
  );
};
