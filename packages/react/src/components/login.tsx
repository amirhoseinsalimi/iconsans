import { SVGProps, Ref, forwardRef } from "react";
const SvgLogin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M14.5 16v2a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2M7.5 11.73h12" />
      <path d="m11.1 15.33-3.6-3.6 3.6-3.6" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLogin);
export default ForwardRef;
