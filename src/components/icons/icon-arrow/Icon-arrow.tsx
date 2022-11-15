import React, {FC} from 'react';

type IconArrowType = {
  className?: string
};
export const IconArrow: FC<IconArrowType> = ({
  ...restProps
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="m1.355 7.442 4.29-4.295a.502.502 0 1 1 .71.71l-4.15 4.145H14.5a.5.5 0 0 1 0 1H2.205l4.15 4.145a.5.5 0 0 1-.163.82.5.5 0 0 1-.547-.11l-4.29-4.295a1.5 1.5 0 0 1 0-2.12Z"
        fill="currentColor"
      />
    </svg>
  );
};
