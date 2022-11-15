import React, {ChangeEvent, FC, useCallback, useState} from 'react';
import s from './Main.module.scss';
import {Supercaption} from "../../components/ui/supercaption/Supercaption";
import classNames from "classnames";
import {MainContentButtons} from "./common/main-content-buttons/Main-content-buttons";
import {InputSearch} from "../../components/bll/input-search/Input-search";
import {AnimationInput} from "../../components/animations/Animation-input";
import {useAppSelector} from "../../hooks/useAppSelector";
import {TypeAnimal} from "../../utils/enum/typeAnimal";
import {dataCat} from "../../data/data-cat";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setData} from "./Main-slice";
import {dataDog} from "../../data/data-dog";
import {filterData} from "../../utils/helpers/functions/filterData";
import {checkTypeAnimalSetData} from "../../utils/helpers/functions/check-type-animal-set-data";


type MainType = {};

export const Main: FC<MainType> = ({}) => {
  const [valueInput, setValueInput] = useState<string>('');
  const [isInput, setInput] = useState<boolean>(false)
  const {animal} = useAppSelector(state => state.main)
  const dispatch = useAppDispatch()
  const isInputSearch = !!animal || isInput;
  const onChangeValueInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value)
  }, [])
  const onClickButtonShowInput = useCallback(() => {
    setInput(true)
  }, [])
  const onFilterInputSearch = useCallback(() => {
    checkTypeAnimalSetData(dispatch, animal, valueInput);
  }, [animal, valueInput])

  return (
    <div className={classNames(s.main, s.container)}>
      <Supercaption className={s.title}>Подберите замену корма для вашего питомца</Supercaption>
      <p className={classNames(s.text, s.h1)}>Кто у вас?</p>
      <MainContentButtons onClickButton={onClickButtonShowInput}/>
      <AnimationInput isInput={isInputSearch}>
        <InputSearch
          placeholder={'Введите название корма'}
          value={valueInput}
          onChangeInput={onChangeValueInput}
          onFilterPopup={onFilterInputSearch}
        />
      </AnimationInput>
    </div>
  );
};
