import React, {FC} from 'react';
import s from './Content-popup.module.scss';
import classNames from "classnames";
import logoPetStory from './../../../../assets/images/logo-pet-story.jpg';
import imageAppStory from './../../../../assets/images/app-store.svg';
import imageGooglePlay from './../../../../assets/images/google-play.svg';
import {ImagePhone} from "../../image-phone/Image-phone";
import phone1 from './../../../../assets/images/tel-popup-1.png';
import phone2 from './../../../../assets/images/tel-popup-2.png';
import phone3 from './../../../../assets/images/tel-popup-3.png';

type ContentPopupType = {
  className?: string
};

export const ContentPopup: FC<ContentPopupType> = ({
  className,
  ...restProps
}) => {
  return (
    <div className={classNames(s.content, className)}>
      <h2 className={classNames(s.title, s.h1)}>
        Получите онлайн-консультацию ветеринарного врача-нутрициолога БЕСПЛАТНО
      </h2>

      <ul className={s.list}>
        <li className={classNames(s.item, s.p3)}>
          Скачивайте приложение PETSTORY
        </li>

        <li className={classNames(s.item, s.p3)}>
          Добавляйте информацию о&nbsp;вашем питомце
        </li>

        <li className={classNames(s.item, s.p3)}>
          Запланируйте консультацию нутрициолога БЕСПЛАТНО
        </li>

        <li className={classNames(s.item, s.p3)}>
          Выбирайте удобный вариант коммуникации: звонок или&nbsp;чат
        </li>
      </ul>

      <div className={s.wrap}>
        <img className={s.logo} src={logoPetStory} alt="Logo pet story"/>

        <div className={s.buttons}>
          <a className={s.button} href={'https://apps.apple.com/ru/app/petstory-здоровый-питомец/id1328798311'} target={'_blank'}>
            <img className={s.image} src={imageAppStory} alt="Button app store"/>
          </a>

          <a className={s.button} href={'https://play.google.com/store/apps/details?id=ru.petstory.androidapp&hl=ru&gl=US'} target={'_blank'}>
            <img className={s.image} src={imageGooglePlay} alt="Button google play"/>
          </a>
        </div>
      </div>

      <ImagePhone className={s.imageTel1} src={phone1} alt={'Phone1'} animationDelay={0.5}/>
      <ImagePhone className={s.imageTel2} src={phone2} alt={'Phone2'} animationDelay={0.3}/>
      <ImagePhone className={s.imageTel3} src={phone3} alt={'Phone3'} animationDelay={0.95}/>
    </div>
  );
};
