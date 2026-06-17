import * as React from "react";

/**
 * Миллениум notice banner — colored rounded block to invite, warn, or confirm.
 *
 * @startingPoint section="Feedback" subtitle="Inline notice banner" viewport="700x140"
 */
export interface BannerProps {
  children?: React.ReactNode;
  /** info = blue invite; success = green; warning = amber; tip = teal step-help. */
  tone?: "info" | "success" | "warning" | "tip";
  /** Bold heading line above the body. */
  title?: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Banner(props: BannerProps): JSX.Element;
