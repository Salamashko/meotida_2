import * as React from "react";

/** Миллениум labelled native select with hint and required marker. */
export interface SelectOption {
  value: string;
  label: string;
}
export interface SelectProps {
  label?: React.ReactNode;
  required?: boolean;
  hint?: React.ReactNode;
  /** Strings or {value,label} objects. */
  options?: (string | SelectOption)[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Optional empty-state first option. */
  placeholder?: string;
  id?: string;
  style?: React.CSSProperties;
}

export declare function Select(props: SelectProps): JSX.Element;
