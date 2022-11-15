import React, {FC, memo} from 'react';
import s from './Supercaption.module.scss';
import classNames from "classnames";

type SupercaptionType = {
  className?: string
  children: string
};

export const Supercaption: FC<SupercaptionType> = memo(({
  className,
  children
}) => {
  return (
    <h1 className={classNames(s.supercaption, className)}>{children}</h1>
  );
})
