import React, {FC, memo} from 'react';
import s from './Card.module.scss';
import classNames from "classnames";
import {Button} from "../../bll/button/Button";
import imageDiscount from './../../../assets/images/discount.png';

type CardType = {
  className?: string
  image: string
  title: string
  text: string
  href: string
};

export const Card: FC<CardType> = memo(({
  className,
  image,
  title,
  text,
  href
}) => {
  return (
    <article className={classNames(s.card, className)}>
      <div className={s.wrap}>
        <img className={s.image} src={image} alt={'Product'}/>
        <img className={s.discount} src={imageDiscount} alt="Discount"/>
      </div>
      <h3 className={classNames(s.title, s.h2)}>{title}</h3>
      <p className={classNames(s.text, s.p3)}>{text}</p>
      <Button className={s.button} buttonType={'link'} href={href}>Узнать больше</Button>
    </article>
  );
})
