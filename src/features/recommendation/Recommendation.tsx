import React, {ChangeEvent, FC, useCallback, useEffect, useRef, useState} from 'react';
import s from './Recommendation.module.scss';
import classNames from "classnames";
import {Supercaption} from "../../components/ui/supercaption/Supercaption";
import {InputSearch} from "../../components/bll/input-search/Input-search";
import {useParams} from "react-router-dom";
import {ButtonBack} from "../../components/bll/button-back/Button-back";
import {ContentCards} from "./common/content-cards/Content-cards";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getRecommendationCards} from "../main/Main-slice";
import {checkTypeAnimalSetData} from "../../utils/helpers/functions/check-type-animal-set-data";

type RecommendationType = {};

export const Recommendation: FC<RecommendationType> = ({}) => {
  const [valueInput, setValueInput] = useState<string>('');
  const {animal, recommendationCards} = useAppSelector(state => state.main)
  const dispatch = useAppDispatch();
  const {id} = useParams<{ id: string }>()
  const recommendation = recommendationCards?.recommendation;
  const onChangeValueInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value)
  }, [])
  const onFilterInputSearch = useCallback(() => {
    checkTypeAnimalSetData(dispatch, animal, valueInput);
  }, [animal, valueInput])

  const ref = useRef<any>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    dispatch(getRecommendationCards(String(id)))
    handleClick()
  }, [id])

  useEffect(() => {
  }, [])

  return (
    <>
      <ButtonBack className={s.buttonBack}/>
      <div className={classNames(s.recommendation, s.container)}>
        <Supercaption className={s.title}>Рекомендованные альтернативные продукты</Supercaption>

        <div className={s.wrap} ref={ref}>
          <InputSearch
            className={{inputSearch: s.inputSearch}}
            placeholder={'Введите название корма'}
            value={valueInput}
            onChangeInput={onChangeValueInput}
            onFilterPopup={onFilterInputSearch}
          />
        </div>

        {recommendation && <ContentCards card={recommendationCards}/>}
      </div>
    </>
  );
};
