import { atom } from "elum-state/react";

export type ImproveList = Improve[];
export type Improve = {
  type:
  "auto_mining" |
  "level_click";

  heart?: number;
  kiss?: number;

  title: string;
  isOver: boolean;

}

export type ShopList = Goods[];
export type Goods = {
  type:
  "valentines_1" |
  "valentines_2" |
  "valentines_3" |
  "smile_1" |
  "smile_2" |
  "frame";

  heart?: number;
  kiss?: number;

  title: string;
  isOver: boolean;
}

export type RatingUserList = RatingUser[];
export type RatingUser = {
  first_name: string;
  last_name: string;
  image: string;
  count: number;
  link: string;
}

export type RatingClanList = RatingClan[];
export type RatingClan = {
  name: string;
  image: string;
  count: number;
  link: string;
}

export type Data = {
  notification: boolean;
  heart: number;
  kiss: number;
  rating: {
    clan: RatingClanList;
    users: {
      hour: RatingUserList;
      day: RatingUserList;
      all: RatingUserList;
    }
  },
  shop: ShopList;
  improve: ImproveList;
}

export const HEART = atom({ key: "heart_balance", default: 0 });

export const DATA = atom<Data>({
  key: "data",
  default: {
    notification: true,

    heart: 0,
    kiss: 0,

    rating: {
      clan: [],
      users: {
        hour: [],
        day: [],
        all: []
      }
    },
    shop: [],
    improve: [],
  }
})