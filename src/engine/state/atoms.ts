import { atom } from "elum-state/react";

export type TasksList = Tasks[];
export type Tasks = {
  type: string;
  title: string;
  badge?: string
  kiss?: number;
  heart?: number;
}

export type VoteList = Vote[];
export type Vote = {
  type:
  "product_1" |
  "product_2" |
  "product_3" |
  "product_4" |
  "product_5" |
  "product_6";

  heart?: number;
  kiss?: number;

  price: number;
};

export type ImproveList = Improve[];
export type Improve = {
  type:
  "auto_mining" |
  "level_click" |
  "level_energy" |
  "count_energy";

  heart?: number;
  kiss?: number;

  title: string;
  description: string;
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
  description: string;
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

  countToBox: number;
  currentToBox: number;

  levelClick: number;
  robot_mining: number;

  energyCurrent: number;
  energyMax: number;

  heart: number;
  kiss: number;
  tasks: TasksList;
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
  vote: VoteList;
}

export const AWAIT_HEART = atom({ key: "heart_balance", default: 0 });

export const DATA = atom<Data>({
  key: "data",
  default: {
    notification: true,
    countToBox: 0,
    currentToBox: 0,
    levelClick: 1,
    robot_mining: 0,
    energyCurrent: 0,
    energyMax: 0,
    heart: 0,
    kiss: 0,
    shop: [],
    improve: [],
    vote: [],
    tasks: [],
    rating: {
      clan: [],
      users: {
        hour: [],
        day: [],
        all: []
      }
    },
  }
})