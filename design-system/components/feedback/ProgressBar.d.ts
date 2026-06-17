import * as React from "react";

/** Миллениум form-completion progress bar — green gradient fill + percent caption. */
export interface ProgressBarProps {
  /** 0–100. */
  value?: number;
  /** Override the default "Заполнено N%" caption. */
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
