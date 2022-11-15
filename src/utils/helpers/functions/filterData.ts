import {dataType} from "../../../data/data-cat";

export const filterData = (data: Array<dataType>, value: string) => {
  return data.filter((item: dataType) => item.nameProductEa.toLowerCase().includes(value.toLowerCase()) || item.nameProductRu.toLowerCase().includes(value.toLowerCase()))
}
