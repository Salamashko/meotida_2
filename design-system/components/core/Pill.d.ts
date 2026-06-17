import * as React from "react";

/** Миллениум pill — small rounded capsule for metadata / status in the header. */
export interface PillProps {
  children?: React.ReactNode;
  /** default = outlined; ok = green status; warn = amber status. */
  tone?: "default" | "ok" | "warn";
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Pill(props: PillProps): JSX.Element;
