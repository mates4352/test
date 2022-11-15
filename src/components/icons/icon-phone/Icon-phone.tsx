import React, {FC} from 'react';

type IconPhoneType = {
  className?: string
};

export const IconPhone: FC<IconPhoneType> = ({
  ...restProps
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="M10.781 15H4.22a1.406 1.406 0 0 1-1.407-1.406V1.406A1.406 1.406 0 0 1 4.22 0h6.562a1.406 1.406 0 0 1 1.406 1.406v12.188A1.406 1.406 0 0 1 10.781 15ZM4.22.937a.469.469 0 0 0-.469.47v12.187a.469.469 0 0 0 .469.469h6.562a.469.469 0 0 0 .469-.47V1.407a.469.469 0 0 0-.469-.468H4.22Z"
        fill="currentColor"
      />
      <path
        d="M7.5 13.125a.469.469 0 0 1-.333-.802.47.47 0 0 1 .666 0 .54.54 0 0 1 .098.155.469.469 0 0 1 .038.178.638.638 0 0 1 0 .094.3.3 0 0 1-.028.084.357.357 0 0 1-.043.085l-.056.07a.468.468 0 0 1-.342.136Z"
        fill="currentColor"
      />
    </svg>
  );
};
