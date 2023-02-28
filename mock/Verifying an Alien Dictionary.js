var isAlienSorted = function (words, order) {
  const map = {};
  for (let i = 0; i < order.length; i++) {
    map[order[i]] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];

    let j = 0;
    while (j < word1.length && j < word2.length && word1[j] === word2[j]) {
      j++;
    }

    if (j < word1.length && j < word2.length && map[word1[j]] > map[word2[j]]) {
      return false;
    }

    if (j === word2.length && word1.length > word2.length) {
      return false;
    }
  }

  return true;
};
