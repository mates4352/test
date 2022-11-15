import {TypeAnimal} from "../../enum/typeAnimal";
import {dataCat} from "../../../data/data-cat";
import {dataDog} from "../../../data/data-dog";
import {PayloadAction} from "@reduxjs/toolkit";
import {AnimalType} from "../../../features/main/Main-type";
import {MainStateType} from "../../../features/main/Main-slice";

export const checkTypeAnimalGetData = (state: MainStateType, action: PayloadAction<AnimalType>) => {
  if(action.payload === TypeAnimal.CAT) {
    state.data = dataCat
  } else if(action.payload === TypeAnimal.DOG) {
    state.data = dataDog
  } else {
    state.data = []
  }
}
