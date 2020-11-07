/** @jsx jsx */
import { Global, jsx, css } from "@emotion/core";
import Typography from "typography";
import noriegaTheme from "typography-theme-noriega";

const typography = new Typography(noriegaTheme);

export default function TypographyStyles() {
  return (
    <Global
      styles={css`
        ${typography.toString()}
      `}
    />
  );
}
