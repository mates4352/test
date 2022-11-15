import React, {FC, memo, useCallback} from 'react';
import s from './Main-content-buttons.module.scss';
import imageCat from "../../../../assets/images/cat.svg";
import {Button} from "../../../../components/bll/button/Button";
import imageDog from "../../../../assets/images/dog.svg";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {initialAnimal} from "../../Main-slice";
import {TypeAnimal} from "../../../../utils/enum/typeAnimal";
import {useAppSelector} from "../../../../hooks/useAppSelector";

type MainContentButtonsType = {
  onClickButton: () => void
};

export const MainContentButtons: FC<MainContentButtonsType> = memo(({
  onClickButton
}) => {
  const {animal} = useAppSelector(state => state.main)
  const dispatch = useAppDispatch();
  const isCat = animal === TypeAnimal.CAT;
  const isDog = animal === TypeAnimal.DOG;
  const onClickButtonCat = useCallback(() => {
    onClickButton()
    dispatch(initialAnimal(TypeAnimal.CAT))
  }, [])
  const onClickButtonDog = useCallback(() => {
    onClickButton()
    dispatch(initialAnimal(TypeAnimal.DOG))
  }, [])

  return (
    <ul className={s.list}>
      <li className={s.item}>
        <img className={s.image} src={imageCat} alt={TypeAnimal.CAT}/>
        <Button styleActive={isCat} onClickButton={onClickButtonCat}>Кошка</Button>
      </li>

      <li className={s.item}>
        <img className={s.image} src={imageDog} alt={TypeAnimal.DOG}/>
        <Button styleActive={isDog} onClickButton={onClickButtonDog}>Cобака</Button>
      </li>
    </ul>
  );
})
