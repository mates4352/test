import React, {FC} from 'react';
import s from './Content-top.module.scss';
import classNames from "classnames";
import {IconPhone} from "../../../../icons/icon-phone/Icon-phone";
import {IconEmail} from "../../../../icons/icon-email/Icon-email";

type ContentTopType = {

};

export const ContentTop: FC<ContentTopType> = ({

}) => {
  return (
    <>
      <h3 className={classNames(s.title, s.h2)}>
        Связаться с нами
      </h3>

      <p className={classNames(s.text, s.p3)}>
        Вы можете связаться с нами каждый день с 9:00 до 21:00 (по московскому времени)
      </p>

      <ul className={s.list}>
        <li className={s.item}>
          <a
            className={classNames(s.link, s.p3)}
            href={"tel:+88002003735"}
            target={'_blank'}>
            <IconPhone className={s.iconPhone}/>
            8 800 200 37 35
          </a>
        </li>

        <li className={s.item}>
          <a
            className={classNames(s.link, s.p3)}
            href={"https://www.royalcanin.com/ru/contact-us"}
            target={'_blank'}>
            <IconEmail className={s.iconEmail}/>
            Связаться с нами
          </a>
        </li>
      </ul>
    </>
  );
};
