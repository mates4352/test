import React, {FC} from 'react';
import s from './Card-main.module.scss';
import classNames from "classnames";
import imageLogoCard from './../../../assets/images/logo-card.svg';

type CardMainType = {
  className?: string
  image: string
  title: string
  text: string
};

export const CardMain: FC<CardMainType> = ({
  className,
  image,
  title,
  text
}) => {
  return (
    <article className={classNames(s.card, className)}>
      <img className={s.image} src={image} alt={'Product'}/>
      <img className={s.imageLogo} src={imageLogoCard} alt={'Logo card'}/>
      <h3 className={classNames(s.title, s.h2)}>{title}</h3>
      <p className={classNames(s.text, s.p3)}>{text}</p>
    </article>
  );
};
