import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowRight2Circle = (
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
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="m10.5 9 3 3-3 3" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight2Circle);
export default ForwardRef;
