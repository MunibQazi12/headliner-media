import { CustomIconProps } from "@/interface/icons.interface";

export default function TwiterIcon({
  IconColor,
  IconHeight,
  IconWidth
}: CustomIconProps) {
  return (
    <svg
      width={IconWidth || "10"}
      height={IconHeight || "11"}
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.76747 4.80256L9.34585 0.732422H8.49789L5.39079 4.26646L2.90915 0.732422H0.046875L3.7996 6.07652L0.046875 10.3447H0.894884L4.17607 6.61261L6.79686 10.3447H9.65913L5.76727 4.80256H5.76747ZM4.60601 6.1236L4.22578 5.59145L1.20043 1.35706H2.50293L4.94442 4.77435L5.32465 5.3065L8.49829 9.74845H7.1958L4.60601 6.1238V6.1236Z"
        fill={IconColor || "#fff"}
      />
    </svg>
  );
}
