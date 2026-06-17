import * as React from "react";

/**
 * Миллениум labelled text input / textarea with hint and required marker.
 *
 * @startingPoint section="Forms" subtitle="Labelled text field + hint" viewport="700x180"
 */
export interface TextFieldProps {
  label?: React.ReactNode;
  required?: boolean;
  /** Muted helper line below the control. */
  hint?: React.ReactNode;
  /** Render a resizable textarea instead of a single-line input. */
  multiline?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  id?: string;
  style?: React.CSSProperties;
}

export declare function TextField(props: TextFieldProps): JSX.Element;
