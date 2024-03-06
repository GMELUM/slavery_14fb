import { ACTIVE_MODAL } from "elum-router/react";
import { setter } from "elum-state/react";

const executeShare = () => new Promise<boolean>((resolve) => {
  setTimeout(() => {
    setter(ACTIVE_MODAL, "how_to_play")
    resolve(true);
  }, 0)
})

export default executeShare;
