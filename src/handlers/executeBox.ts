import { backPage, nextPage } from "elum-router/react";
import { getter, setter } from "elum-state/react";
import { DATA } from "engine/state/atoms";

// Отправляем запрос на сервер о получении награды за бокс
// Получаем ответ и вызываем модалку в которой отображается награда
// и обновляем новые требования для получения бокса

export type ItemList = Item[];
export type Item = {
  type:
  "coin" |
  "kiss" |
  "super_snowball" |
  "snowball" |
  "smile_1" |
  "smile_2" |
  "energy" |
  "heart" |
  "frame" |
  "auto_mining";
  count: number;
}

const executeBox = () => new Promise<boolean>((resolve) => {

  const value = getter(DATA);

  if (value.countToBox != value.currentToBox) {
    return resolve(false)
  }

  // запускаем лоадер
  nextPage({ popout: "loading", freeze: true });

  // Получаем ответ от сервера
  const response: ItemList = [
    {
      type: "coin",
      count: 1000000000
    },
    {
      type: "smile_1",
      count: 1
    },
    {
      type: "smile_2",
      count: 1
    },
    {
      type: "kiss",
      count: 100
    },
    {
      type: "auto_mining",
      count: 1
    },
    {
      type: "heart",
      count: 1000000
    },
    {
      type: "energy",
      count: 1000
    },
    {
      type: "frame",
      count: 1
    }
  ]

  const updateBalance = {} as Record<string, number>;
  response.forEach((item) => {
    switch (item.type) {
      case "heart": updateBalance["heart"] = item.count; break;
      case "kiss": updateBalance["kiss"] = item.count; break;
    }
  })

  setTimeout(() => {

    // обновляем балансы
    setter(DATA, (data) => ({
      ...data,
      countToBox: data.countToBox * 2,
      currentToBox: 0,

      kiss: data.kiss + (updateBalance["kiss"] || 0),
      heart: data.heart + (updateBalance["heart"] || 0)
    }))

    // Прячем лоадер
    backPage({ ignoreFreeze: true, toStay: "app" });

    // Запускаем модалку для отображения награды
    nextPage({
      modal: "box", params: {
        list: response
      }
    })

    resolve(true);
  }, 2000)

})

export default executeBox;
