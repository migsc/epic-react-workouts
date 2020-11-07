import React from "react";

type Props = {
  children?: any;
  variant?: string;
};

export default function Button({
  variant = "primary",
  children,
  ...props
}: Props) {
  return <button {...props}>{children}</button>;
}
