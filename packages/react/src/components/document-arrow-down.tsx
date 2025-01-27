import { SVGProps, Ref, forwardRef } from "react";
const SvgDocumentArrowDown = (
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
    <g stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}>
      <path
        strokeMiterlimit={10}
        d="M18 10.41V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.59a1 1 0 0 1 .7.29l5.42 5.42a1 1 0 0 1 .29.7Z"
      />
      <path
        strokeLinejoin="round"
        d="M12 4.48V9a1 1 0 0 0 1 1h4.52a.2.2 0 0 0 .14-.34l-5.32-5.32a.2.2 0 0 0-.34.14ZM12 17v-4M13.57 15.43 12 17l-1.57-1.57"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgDocumentArrowDown);
export default ForwardRef;
