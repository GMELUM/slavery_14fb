import { setter } from "elum-state/react";
import { DATA } from "engine/state/atoms";

const executeNotify = () => new Promise<boolean>((resolve) => {
  setTimeout(() => {
    setter(DATA, (data) => ({
      ...data,
      notification: false
    }))
    resolve(true);
  }, 2000)
})

export default executeNotify;
