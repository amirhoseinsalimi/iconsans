import { SVGProps, Ref, forwardRef } from "react";
const SvgHome2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}>
      <path d="M10 19.9H7.5a3 3 0 0 1-3-3v-8l6-4M13.5 4.9l6 4v8a3 3 0 0 1-3 3H14" />
      <path
        strokeLinecap="round"
        d="m21 9.9-1.5-1-6-4-.95-.63a1 1 0 0 0-1.1 0l-.95.63-6 4-1.5 1M14 19.9v-4a2 2 0 0 0-4 0v4"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgHome2);
export default ForwardRef;
