import React, {FC, memo} from 'react';
import s from './Popup.module.scss';
import classNames from "classnames";
import {ContentPopup} from "./content/Content-popup";
import {AnimatePresence, motion} from "framer-motion";

type contentPopupType = ReturnType<typeof ContentPopup>
type PopupType = {
  className?: string
  isPopup: boolean
  children: contentPopupType
  onClickClose: () => void
};

const animations = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0},
}

export const Popup: FC<PopupType> = memo(({
  className,
  children,
  isPopup,
  onClickClose,
  ...restProps
}) => {
  return (
    <AnimatePresence>
      {isPopup &&
          <motion.section
              className={classNames(s.popup, className)}
              variants={animations}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
          >
              <div className={s.bg} onClick={onClickClose}></div>
              <div className={s.body}>
                  <button className={s.close} type={'button'} onClick={onClickClose}/>
                {children}
              </div>
          </motion.section>
      }
    </AnimatePresence>

  );
})
