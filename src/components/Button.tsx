import React from "react";

type Props = {
  children?: any;
  variant?: string;
  onClick: () => void;
};

export default function Button({
  variant = "primary",
  children,
  onClick,
}: Props) {
  return <button onClick={onClick}>{children}</button>;
}
