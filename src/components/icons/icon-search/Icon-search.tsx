import React, {FC} from 'react';

type IconSearchType = {
  className?: string
};

export const IconSearch: FC<IconSearchType> = ({
  ...restProps
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <g clipPath="url(#a)">
        <path
          d="M0 8.016a8.004 8.004 0 0 0 13.24 6.062l4.75 4.75a.594.594 0 0 0 .974-.193.593.593 0 0 0-.13-.65l-4.75-4.75A8.01 8.01 0 1 0 0 8.015Zm1.188 0a6.828 6.828 0 1 1 13.656 0 6.828 6.828 0 0 1-13.656 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h19v19H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
