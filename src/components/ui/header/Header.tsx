import React, {FC, memo} from 'react';
import s from './Header.module.scss';
import logo from './../../../assets/images/logo.svg';
import classNames from "classnames";

type HeaderType = {
  className?: string
};

export const Header: FC<HeaderType> = memo(({
  className
}) => {
  return (
    <div className={classNames(s.header, className)}>
      <div className={classNames(s.wrap, s.container)}>
        <img className={s.logo} src={logo} alt={'Logo'}/>
      </div>
    </div>
  );
})
