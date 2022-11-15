import React, {FC, memo} from 'react';
import s from './Footer.module.scss';
import classNames from "classnames";
import {ContentTop} from "./common/content-top/Content-top";
import {ContentBottom} from "./common/content-bottom/Content-bottom";

type FooterType = {
  className?: string
};

export const Footer: FC<FooterType> = memo(({
  className
}) => {
  return (
    <footer className={classNames(s.footer, className)}>
      <div className={classNames(s.wrap, s.container)}>
        <ContentTop/>
        <ContentBottom/>
      </div>
    </footer>
  );
})
