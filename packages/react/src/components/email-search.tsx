import { SVGProps, Ref, forwardRef } from "react";
const SvgEmailSearch = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M13 20H5.4A3.41 3.41 0 0 1 2 16.6V7.4A3.41 3.41 0 0 1 5.4 4h13.2A3.41 3.41 0 0 1 22 7.4V13" />
      <path d="m6 9 4.84 3.17a2 2 0 0 0 2.32 0L18 9M18.04 19.78a2.74 2.74 0 1 0 0-5.48 2.74 2.74 0 0 0 0 5.48ZM20 19l1.18 1.18" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgEmailSearch);
export default ForwardRef;
