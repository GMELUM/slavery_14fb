import { getter, setter } from "elum-state/react";
import { clamp } from "engine";
import { AWAIT_HEART, DATA } from "engine/state/atoms";

setInterval(async () => {

  // Накликано на текущий момент
  const value = getter(AWAIT_HEART)

  // нужно обновлять энергию раз в 5 секунд (если по кликам
  // будет увеличен интервал то нужно создать отдельный таймер по обновлению
  setter(DATA, (data) => ({
    ...data,
    energyCurrent: clamp(data.energyCurrent + 1, 0, data.energyMax)
  }))

  // Если нет кликов то скипаем 
  if (value === 0) {
    return
  }

  // Отправляем запрос на сервер
  const request = {
    count: value
    // И другие нужные данные
  }

  // Получаем ответ
  const response = {
    accrued: request.count,
    // Если все хорошо то сервер отдает в balance число 
    // равное старому балансу + request.count
    balance: getter(DATA).heart + request.count
    // И другие нужные данные
  }

  // Обновление очереди на обновление сердец
  setter(AWAIT_HEART, (count) => {
    const value = count - response.accrued;

    // Если так случилось что начисления больше ожидания
    if (value < 0) {
      return 0
    }

    // Если все нормально
    return value

  })

  // Обновление текущего баланса сердец
  setter(DATA, (data) => ({
    ...data,
    heart: response.balance,
    // Обновляем прогресс для получения бокса
    currentToBox: clamp(data.currentToBox + response.accrued, 0, data.countToBox),
    energyCurrent: clamp(data.energyCurrent - response.accrued, 0, data.energyMax)
  }))

}, 5000)

const executeClickl = () => {

  const data = getter(DATA)
  const level = data.levelClick

  setter(AWAIT_HEART, (count) => {
    return count + level
  })
}

export default executeClickl;
