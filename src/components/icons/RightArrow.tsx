import { IconProp } from "./type";

export const RightArrow = ({ className, width, height, props }: IconProp) => (
  <svg
    {...props}
    className={className}
    role="img"
    height={height || "24"}
    width={width || "24"}
    viewBox="0 0 24 24"
  >
    <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
  </svg>
);
