import { useEffect, useState } from "react";

const parts: [string, number][] = [
  ["year", 31536000000],
  ["month", 2592000000],
  ["week", 604800000],
  ["day", 86400000],
  ["hour", 3600000],
  ["minute", 60000],
  ["second", 1000]
]

const regexp = /\d+:\d+[:\d+]*$/g;

const parse = (time: number) => parts.reduce<Record<string, number>>((object, [key, value]) => {
  object[key] = Math.floor(time / value);
  time -= object[key] * value;
  return object;
}, {});

const useTimeout = (time?: number) => {
  const [value, setValue] = useState<string | null>(parseValue(time));

  function parseValue(time?: number) {
    if (!time) { return null }

    const timestamp = new Date(time || 0).getTime() - Date.now();
    if (timestamp <= 0) { return null }

    const data = parse(timestamp);

    let isCheck = false;

    const string = Object.keys(data)
      .map((key) => {
        if (!data[key] && !isCheck) { return; }
        isCheck = true;
        return `${data[key]}`.padStart(2, "0");
      })
      .join(":")

    const [element] = Array.from(string.matchAll(regexp));

    if (!element || !element.length) {
      return null
    }

    return element[0]

  }

  useEffect(() => {
    if (time) {
      console.log(time)
      const timer = setInterval(() => setValue(parseValue(time)), 250);
      return () => clearInterval(timer);
    }
  }, [time])

  return value;

}

export default useTimeout;
