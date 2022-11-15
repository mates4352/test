import React, {FC} from 'react';
import s from './Image-phone.module.scss';
import classNames from "classnames";
import { motion } from 'framer-motion';

type ImagePhoneType = {
  className?: string
  src: string
  alt: string
  animationDelay?: number
};

export const ImagePhone: FC<ImagePhoneType> = ({
  className,
  animationDelay = 0.5,
  ...restProps
}) => {
  const animations = {
    initial: {scale: 0, opacity: 0},
    animate: {scale: 1, opacity: 1},
    exit: {scale: 0, opacity: 0},
  }

  return (
    <motion.img
      className={classNames(s.imagePhone, className)}
      variants={animations}
      initial={'initial'}
      animate={'animate'}
      transition={{delay: animationDelay}}
      exit={'exit'}
      {...restProps}/>
  );
};
