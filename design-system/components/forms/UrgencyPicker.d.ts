import * as React from "react";

/** A single urgency option. */
export interface UrgencyLevel {
  value: string;
  label: string;
  /** Leading status dot glyph (e.g. 🔴/🟠/🟢). */
  dot?: string;
}

/**
 * Миллениум urgency picker — bordered radio chips (P1/P2/P3) that highlight when chosen.
 *
 * @startingPoint section="Forms" subtitle="Urgency radio chip row" viewport="700x120"
 */
export interface UrgencyPickerProps {
  /** Defaults to the app's P1/P2/P3 levels. */
  levels?: UrgencyLevel[];
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  style?: React.CSSProperties;
}

export declare function UrgencyPicker(props: UrgencyPickerProps): JSX.Element;
