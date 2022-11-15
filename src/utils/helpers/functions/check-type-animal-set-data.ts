import {TypeAnimal} from "../../enum/typeAnimal";
import {filterData} from "./filterData";
import {dataCat} from "../../../data/data-cat";
import {setData} from "../../../features/main/Main-slice";
import {dataDog} from "../../../data/data-dog";
import {AppDispatch} from "../../../app/store";
import {AnimalType} from "../../../features/main/Main-type";

export const checkTypeAnimalSetData = (dispatch: AppDispatch, animal: AnimalType, value: string) => {
  if(animal === TypeAnimal.CAT) {
    const data = filterData(dataCat, value)
    dispatch(setData(data))
  } else if (animal === TypeAnimal.DOG) {
    const data = filterData(dataDog, value)
    dispatch(setData(data))
  }
}
