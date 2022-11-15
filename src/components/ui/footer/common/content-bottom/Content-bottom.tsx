import React, {FC} from 'react';
import s from './Content-bottom.module.scss';
import classNames from "classnames";

type ContentBottomType = {};

export const ContentBottom: FC<ContentBottomType> = () => {
  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        <li className={s.item}>
          <a className={classNames(s.link, s.caption_1)} href="https://www.mars.com/privacy-policy-russia" target={'_blank'}>
            Конфиденциальность
          </a>
        </li>

        <li className={s.item}>
          <a className={classNames(s.link, s.caption_1)} href="https://www.mars.com/cookies-russia" target={'_blank'}>
            Файлы Cookies
          </a>
        </li>

        <li className={s.item}>
          <a className={classNames(s.link, s.caption_1)} href="https://www.mars.com/legal-russia" target={'_blank'}>
            Юридические условия
          </a>
        </li>

        <li className={s.item}>
          <a className={classNames(s.link, s.caption_1)} href="https://www.mars.com/accessibility-russian" target={'_blank'}>
            Доступность
          </a>
        </li>
      </ul>

      <small className={classNames(s.copyright, s.caption_2)}>
        Copyright © 2022 Royal Canin SAS
      </small>

      <p className={classNames(s.text, s.caption_2)}>
        Входит в группу компаний Mars, Incorporated.
      </p>
    </div>
  );
};
