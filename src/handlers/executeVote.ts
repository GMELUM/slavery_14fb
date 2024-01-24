import { setter } from "elum-state/react";
import { DATA, Vote } from "engine/state/atoms";

const executeVote = (item: Vote) => new Promise<boolean>((resolve) => {
  setTimeout(() => {

    setter(DATA, (data) => ({
      ...data,
      heart: data.heart + (item.heart || 0),
      kiss: data.kiss + (item.kiss || 0)
    }))

    resolve(true);
  }, 2000)
})

export default executeVote;
