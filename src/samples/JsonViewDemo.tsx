import {
  JsonView,
  allExpanded,
  darkStyles,
  defaultStyles,
} from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import JsonHighlighter from "./JsonHightlight";

interface IPA {
  word: string;
  ipa: string;
}

interface Translation {
  origin: IPA;
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
        origin: {
          word: "devastating",
          ipa: "devastating",
        },
        translated: "tàn phá",
      },
      example:
        "Little is known about the North Korean troops deployed to support Russia in its devastating yearslong war in Ukraine.",
    },
  ],
};

export const JsonViewDemo: React.FC = () => {
  return (
    <div className="bg-background-200 flex justify-center">
      <div className="bg-slate-100 flex flex-col gap-1 w-screen max-w-[600px] min-w-[375px] min-h-screen shadow-lg">
        <JsonHighlighter data={json} indent={2} />
        <JsonView
          data={json}
          shouldExpandNode={allExpanded}
          style={defaultStyles}
        />
        <JsonView
          data={json}
          shouldExpandNode={allExpanded}
          style={darkStyles}
        />
      </div>
    </div>
  );
};
