import { atom } from "elum-state/react";
import { ItemList } from "handlers/executePresent";

export type TasksList = Tasks[];
export type Tasks = {
  type: string;
  group: "general" | "balance";
  title: string;
  badge?: string
  kiss?: number;
  heart?: number;
  energy?: number;
}

export type VoteList = Vote[];
export type Vote = {
  type:
  "product_1" |
  "product_2" |
  "product_3" |
  "product_4" |
  "product_5" |
  "product_6" |
  string;

  group: "general" | "balance";

  heart?: number;
  kiss?: number;
  energy?: number | string;

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

  isPresent: boolean;

  specialOffer?: {
    items: ItemList;
    price: number;
  };

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
    // уведомления
    notification: true,
    //сколько нужно для получения бокса 
    countToBox: 0,
    // сколько сейчас есть кликов до бокса
    currentToBox: 0,
    // уровень прокачки клика, 1 уровень +1 к клику
    levelClick: 1,
    // Показываем что робот нафармил для нас сердца (показывает модалку при входе)
    robot_mining: 0,
    // сколько есть энергии для кликов
    energyCurrent: 0,
    // сколько максимум может быть энергии
    energyMax: 0,
    // кол-во сердец
    heart: 0,
    // кол-во поцелуев
    kiss: 0,
    // определяет можно лди забрать подарки
    isPresent: false,
    // магазин
    shop: [],
    // улучшения
    improve: [],
    // магазин за голоса
    vote: [],
    // задания
    tasks: [],
    // рейтинг
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