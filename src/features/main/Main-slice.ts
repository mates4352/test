import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AnimalType} from "./Main-type";
import {dataType} from "../../data/data-cat";
import {checkTypeAnimalGetData} from "../../utils/helpers/functions/check-type-animal-get-data";

export interface MainStateType {
  animal: AnimalType
  data: Array<dataType> | []
  recommendationCards: dataType
}

const initialState = {
  animal: '',
  data: [],
  recommendationCards: {}
} as MainStateType

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setData: (state: MainStateType, action: PayloadAction<Array<dataType>>) => {
      state.data = action.payload
    },
    getRecommendationCards: (state: MainStateType, action: PayloadAction<string>) => {
      state.recommendationCards = state.data.filter((item: dataType) => item.id === action.payload)[0]
      if(state.recommendationCards.recommendation) {
        state.recommendationCards.recommendation = state.recommendationCards.recommendation?.sort((a, b) => a.priority - b.priority)
      }
    },
    initialAnimal: (state, action: PayloadAction<AnimalType>) => {
      state.animal = action.payload
      checkTypeAnimalGetData(state, action)
    },
  },
})

export const mainReducer = mainSlice.reducer;
export const {initialAnimal, setData, getRecommendationCards} = mainSlice.actions;
