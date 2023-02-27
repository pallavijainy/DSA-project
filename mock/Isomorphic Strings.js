var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charMap = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (charMap[sChar] === undefined) {
      charMap[sChar] = tChar;
    } else if (charMap[sChar] !== tChar) {
      return false;
    }
  }

  const usedChars = {};

  for (let char in charMap) {
    const mappedChar = charMap[char];

    if (usedChars[mappedChar]) {
      return false;
    }

    usedChars[mappedChar] = true;
  }

  return true;
};
