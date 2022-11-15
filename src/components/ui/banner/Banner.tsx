import React, {FC, memo, useCallback, useState} from 'react';
import s from './Banner.module.scss';
import classNames from "classnames";
import {Button} from "../../bll/button/Button";
import imageCat from './../../../assets/images/banner-cat.jpg';
import imageDog from './../../../assets/images/banner-dog.jpg';
import { motion } from 'framer-motion';

type BannerType = {
  className?: string
  onClickButton?: () => void
};

const animations = {
  initial: {scale: 0, opacity: 0},
  animate: {scale: 1, opacity: 1},
  exit: {scale: 0, opacity: 0},
}

const animationsAnimal = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0},
}

export const Banner: FC<BannerType> = memo(({
  className,
  onClickButton,
  ...restProps
}) => {
  return (
    <section className={classNames(s.banner, className)} {...restProps}>
      <motion.div
        className={s.wrap}
        variants={animations}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
      >
        <h2 className={classNames(s.title, s.h1)}>Нужна помощь с&nbsp;подбором корма?</h2>
        <p className={classNames(s.text, s.p1)}>Запишитесь на бесплатную консультацию к&nbsp;нутрициологу онлайн</p>
        <Button className={s.button} onClickButton={onClickButton}>Подробнее</Button>
      </motion.div>

      <motion.img
        className={s.imageCat}
        src={imageCat}
        alt="cat"
        variants={animationsAnimal}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
        transition={{duration: 0.8}}/>
      <motion.img
        className={s.imageDog}
        src={imageDog}
        alt="dog"
        variants={animationsAnimal}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
        transition={{duration: 0.8}}/>
    </section>
  );
})
