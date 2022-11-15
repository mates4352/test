import React, {FC, memo} from 'react';
import s from './Button-back.module.scss';
import classNames from "classnames";
import {IconArrow} from "../../icons/icon-arrow/Icon-arrow";
import {NavLink} from "react-router-dom";
import {Link} from "../../../utils/enum/Routing";

type ButtonBackType = {
  className?: string
};

export const ButtonBack: FC<ButtonBackType> = memo(({
  className,
  ...restProps
}) => {

  return (
    <NavLink
      className={classNames(s.buttonBack, s.p2, className)}
      to={Link.MAIN}
      {...restProps}
    >
      <IconArrow className={s.icon}/>
      <span>Назад</span>
    </NavLink>
  );
})
