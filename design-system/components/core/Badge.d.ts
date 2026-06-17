import * as React from "react";

/** Миллениум badge — taxonomy label on list items (e.g. Wiki access level). */
export interface BadgeProps {
  children?: React.ReactNode;
  /** public = green; internal = amber; candidate = indigo. */
  tone?: "public" | "internal" | "candidate";
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
