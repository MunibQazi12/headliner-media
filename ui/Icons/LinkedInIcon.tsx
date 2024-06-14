import { CustomIconProps } from "@/interface/icons.interface";

export default function LinkedInIcon({
  IconColor,
  IconHeight,
  IconWidth
}: CustomIconProps) {
  return (
    <svg
      width={IconWidth || "12"}
      height={IconHeight || "13"}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3468 12.718V8.19165C11.3468 5.9671 10.9211 4.26779 8.61414 4.26779C7.50186 4.26779 6.76035 4.94751 6.45825 5.59634H6.43078V4.46861H4.24743V12.718H6.52691V8.6242C6.52691 7.54282 6.70542 6.50779 7.88635 6.50779C9.05356 6.50779 9.06729 7.7282 9.06729 8.68599V12.7025H11.3468V12.718ZM0.539842 4.46861H2.81932V12.718H0.539842V4.46861ZM1.67958 0.359375C0.951795 0.359375 0.361328 1.02365 0.361328 1.84241C0.361328 2.66117 0.951795 3.34089 1.67958 3.34089C2.40737 3.34089 2.99783 2.66117 2.99783 1.84241C2.99783 1.02365 2.40737 0.359375 1.67958 0.359375Z"
        fill={IconColor || "#fff"}
      />
    </svg>
  );
}
