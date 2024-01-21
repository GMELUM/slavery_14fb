function* classGenerator(): Generator<string, string, string> {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let currentLength = 1;
  const usedKeys = new Set<string>();

  while (true) {
    if (usedKeys.size === Math.pow(characters.length, currentLength)) {
      currentLength++;
      usedKeys.clear();
    }

    let key = "";
    while (true) {
      for (let i = 0; i < currentLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters[randomIndex];
      }

      if (!usedKeys.has(key)) {
        usedKeys.add(key);
        yield key;
        break;
      }

      key = "";
    }
  }
}

export default classGenerator;
