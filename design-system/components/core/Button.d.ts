import * as React from "react";

/**
 * Миллениум action button. Bold, rounded (14px), 42px min-height, lifts on hover.
 *
 * @startingPoint section="Core" subtitle="Primary action button + variants" viewport="700x180"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. primary = accent fill; the gradient CTAs match the app's hero buttons. */
  variant?: "primary" | "secondary" | "ghost" | "danger" | "mail" | "copyAll" | "zip";
  /** md = standard 42px control; lg = 66px hero CTA. */
  size?: "md" | "lg";
  disabled?: boolean;
  /** Leading icon node (emoji or glyph), rendered before the label. */
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
