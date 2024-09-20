import { CustomIconProps } from "@/interface/icons.interface";

export default function DotBtnMain({
  IconColor,
  IconHeight,
  IconWidth
}: CustomIconProps) {
  return (
    <svg
      width={IconWidth || "7"}
      height={IconHeight || "27"}
      viewBox="0 0 7 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 13.5C0 15.2176 1.39777 16.6154 3.11538 16.6154C4.833 16.6154 6.23077 15.2176 6.23077 13.5C6.23077 11.7824 4.833 10.3846 3.11538 10.3846C1.39777 10.3846 0 11.7824 0 13.5ZM0 23.8846C0 25.6022 1.39777 27 3.11538 27C4.833 27 6.23077 25.6022 6.23077 23.8846C6.23077 22.167 4.833 20.7692 3.11538 20.7692C1.39777 20.7692 0 22.167 0 23.8846ZM0 3.11538C0 4.833 1.39777 6.23077 3.11538 6.23077C4.833 6.23077 6.23077 4.833 6.23077 3.11538C6.23077 1.39777 4.833 0 3.11538 0C1.39777 0 0 1.39777 0 3.11538Z"
        fill={IconColor || "#000"}
      />
    </svg>
  );
}
