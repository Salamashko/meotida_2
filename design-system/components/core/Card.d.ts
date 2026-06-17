import * as React from "react";

/**
 * Миллениум content card — white surface, hairline border, 22px radius, soft shadow.
 *
 * @startingPoint section="Core" subtitle="Surface panel container" viewport="700x220"
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Tinted variant (#f8fbfc) for nested/secondary panels. */
  soft?: boolean;
  style?: React.CSSProperties;
}

export declare function Card(props: CardProps): JSX.Element;
