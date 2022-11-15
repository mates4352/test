import React, {FC, memo, useEffect, useRef} from 'react';
import s from './Content-cards.module.scss';
import classNames from "classnames";
import {Card} from "../../../../components/ui/card/Card";
import {dataType, recommendationType} from "../../../../data/data-cat";
import {CardMain} from "../../../../components/ui/card-main/Card-main";
import Slider from "react-slick";
import {motion} from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from "../../../../hooks/useMediaQuery";

type ContentCardsType = {
  className?: string
  card: dataType
};

const animations = {
  initial: {scale: 0.5, opacity: 0},
  animate: {scale: 1, opacity: 1},
  exit: {scale: 0, opacity: 0},
}

const animationsList = {
  initial: {opacity: 0, translateX: '100%'},
  animate: {opacity: 1, translateX: 0},
  exit: {opacity: 0, translateX: '100%'},
}

export const ContentCards: FC<ContentCardsType> = memo(({
  className,
  card
}) => {
  const media1439 = useMediaQuery('(max-width: 1439px)')
  const media640 = useMediaQuery('(max-width: 640px)')
  const card1 = card?.recommendation?.length === 1
  const card2 = card?.recommendation?.length === 2
  const card3 = card?.recommendation?.length && card?.recommendation?.length >= 3
  const media640Card2 = (media640 && card2)
  const media640Card3 = (media640 && card3)

  const settings = {
    speed: 500,
    slidesToShow: card1 ? 1 : media640Card2 ? 2 : media640Card3 ? 3 : card2 ? 2 : media1439 ? 2 : 3,
    slidesToScroll: card1 ? 1 : media640 ? 1 : 2,
    vertical: media640 && true,
    verticalSwiping: media640 && true,
    style: {height: '100% !important'}
  };

  return (
    <motion.section
      className={classNames(s.content, className)}
      variants={animations}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
    >
      <ul className={classNames(s.list, (card3 || card2 || card1) && s.listCard2)}>
        <li className={s.item} >
          <CardMain
            image={card.image}
            title={card.nameProductEa}
            text={card.text}
          />
        </li>

        <motion.li
          className={classNames(s.item, card2 && s.itemCard2)}
          variants={animationsList}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          transition={{delay: 0.5}}
          onTouchStart={() => {
            if(media640) document.body.style.overflow = 'hidden'
          }}
          onTouchEnd={() => {
            if(media640) document.body.style.overflow = 'auto'
          }}
        >
          <Slider {...settings}>
            {card?.recommendation?.map((item: recommendationType) =>
              <Card
                key={item.text}
                image={item.image}
                title={item.nameProductEa}
                text={item.text}
                href={item.linkProduct}
              />
            )}
          </Slider>
        </motion.li>
      </ul>


    </motion.section>
  );
})
