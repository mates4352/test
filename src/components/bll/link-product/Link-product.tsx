import React, {FC} from 'react';
import s from './Link-product.module.scss';
import classNames from "classnames";
import {Link} from "react-router-dom";

type LinkProductType = {
  className?: string
  title: string
  text: string
  src?: string
  to: string
};

export const LinkProduct: FC<LinkProductType> = ({
  className,
  title,
  text,
  src,
  to,
  ...restProps
}) => {
  return (
    <Link
      className={classNames(s.linkProduct, className)}
      to={to}
      {...restProps}>
      <div className={s.wrap}>
        <h3 className={classNames(s.title, s.p2)}>{title}</h3>
        <p className={classNames(s.text, s.caption_2)}>{text}</p>
      </div>

      <img className={s.image} src={src} alt="Корм"/>
    </Link>
  );
};
