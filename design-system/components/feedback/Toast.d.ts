import * as React from "react";

/** Миллениум toast — dark slate notification card with a colored left accent. */
export interface ToastProps {
  children?: React.ReactNode;
  /** ok = green; err = red; info = sky (default). */
  tone?: "ok" | "err" | "info";
  style?: React.CSSProperties;
}

export declare function Toast(props: ToastProps): JSX.Element;
