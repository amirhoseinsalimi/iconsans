import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgReceiveCircle = (
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
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM8.46 15.54l7.08-7.08" />
      <path d="M12.71 15.54H8.46v-4.25" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgReceiveCircle);
export default ForwardRef;
