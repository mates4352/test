import React, {FC} from 'react';

type IconEmailType = {
  className?: string
};

export const IconEmail: FC<IconEmailType> = ({
  ...restProps
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <g clipPath="url(#a)" fill="currentColor">
        <path d="M10 11.625a1.876 1.876 0 0 1-1.038-.319L.281 5.519A.625.625 0 0 1 .968 4.48l8.688 5.787a.625.625 0 0 0 .687 0l8.688-5.787a.625.625 0 1 1 .687 1.038l-8.681 5.787a1.875 1.875 0 0 1-1.037.319Z" />
        <path d="M18.125 16.875H1.875A1.875 1.875 0 0 1 0 15V5a1.875 1.875 0 0 1 1.875-1.875h16.25A1.875 1.875 0 0 1 20 5v10a1.875 1.875 0 0 1-1.875 1.875Zm-16.25-12.5A.625.625 0 0 0 1.25 5v10a.625.625 0 0 0 .625.625h16.25A.624.624 0 0 0 18.75 15V5a.625.625 0 0 0-.625-.625H1.875Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
