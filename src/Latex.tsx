import * as React from "react";

import renderLatex, { Macros } from "./renderLatex";
import { Delimiter } from "./types";
import "./Latex.css";

export interface LatexProps {
  children: string | string[];
  delimiters?: Delimiter[];
  strict?: boolean;
  trust?: boolean;
  macros?: Macros;
}

const defaultDelimiters = [
  { left: "$$", right: "$$", display: true },
  { left: "\\(", right: "\\)", display: false },
  { left: "$", right: "$", display: false },
  { left: "\\[", right: "\\]", display: true },
];

export default function Latex({
  children,
  delimiters = defaultDelimiters,
  strict = false,
  macros,
  trust,
}: LatexProps) {
  const renderedLatex = renderLatex(
    Array.isArray(children) ? children.join("") : children,
    delimiters!,
    strict!,
    macros,
    trust
  );
  return (
    <span
      className="__Latex__"
      dangerouslySetInnerHTML={{ __html: renderedLatex }}
    />
  );
}
