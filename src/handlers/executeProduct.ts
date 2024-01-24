import { setter } from "elum-state/react";
import { DATA } from "engine/state/atoms";

const executeProduct = (type: string) => new Promise<boolean>((resolve) => {
  setTimeout(() => {

    if (type.startsWith("valentines_")) {
      setter(DATA, (data) => ({
        ...data,
        notification: false
      }))
    }

    if (type.startsWith("level_click")) {
      setter(DATA, (data) => ({
        ...data,
        levelClick: data.levelClick + 1 
      }))
    }

    resolve(true);
  }, 2000)
})

export default executeProduct;
