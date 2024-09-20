import { CustomIconProps } from "@/interface/icons.interface";

export default function FacebookIcon({
  IconColor,
  IconHeight,
  IconWidth
}: CustomIconProps) {
  return (
    <svg
      width={IconWidth || "7"}
      height={IconHeight || "13"}
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.56239 12.718V7.08106H6.58588L6.88946 4.88359H4.56239V3.48083C4.56239 2.84482 4.75058 2.41138 5.72746 2.41138L6.97137 2.4109V0.445409C6.75625 0.419281 6.01783 0.359375 5.15839 0.359375C3.36374 0.359375 2.13509 1.38327 2.13509 3.2632V4.88359H0.105469V7.08106H2.13509V12.718H4.56239Z"
        fill={IconColor || "#fff"}
      />
    </svg>
  );
}
