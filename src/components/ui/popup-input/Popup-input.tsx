import React, {FC, useCallback, useState} from 'react';
import s from './Popup-input.module.scss';
import {AnimatePresence, motion} from "framer-motion";
import classNames from "classnames";
import {LinkProduct} from "../../bll/link-product/Link-product";
import {Link} from "../../../utils/enum/Routing";
import {dataType} from "../../../data/data-cat";
import {Banner} from "../banner/Banner";
import {Popup} from "../popup/Popup";
import {ContentPopup} from "../popup/content/Content-popup";

type PopupInputType = {
  className?: string
  isPopup?: boolean
  dataArray?: Array<dataType> | []
};

const animations = {
  initial: {height: 0, opacity: 0},
  animate: {height: 'auto', opacity: 1},
  exit: {height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0},
}

export const PopupInput: FC<PopupInputType> = ({
  className,
  isPopup,
  dataArray
}) => {
  const [isPopupBanner, setPopupBanner] = useState<boolean>(false);

  const onClosePopupBanner = useCallback(() => {
    setPopupBanner(false)
  }, [])
  const onOpenPopupBanner = useCallback(() => {
    setPopupBanner(true)
  }, [])
  return (
    <>
      <AnimatePresence>
        {isPopup &&
            <motion.div
                className={classNames(s.popupInput, className)}
                variants={animations}
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
            >
                <div className={s.wrap}>
                  {dataArray?.length === 0 &&
                      <>
                          <p className={classNames(s.text, s.p2)}>По данному корму альтернатив&nbsp;не&nbsp;найдено</p>
                          <Banner className={s.banner} onClickButton={onOpenPopupBanner}/>
                      </>
                  }
                    <ul className={s.list}>
                      {dataArray?.map((item: dataType) =>
                        <li className={s.item} key={item.id}>
                          <LinkProduct title={item.nameProductEa} text={item.text} src={item.image} to={Link.RECOMMENDATION + '/' + item.id}/>
                        </li>
                      )}
                    </ul>
                </div>
            </motion.div>
        }
      </AnimatePresence>

      <Popup isPopup={isPopupBanner} onClickClose={onClosePopupBanner}>
        <ContentPopup/>
      </Popup>
    </>
  );
};
