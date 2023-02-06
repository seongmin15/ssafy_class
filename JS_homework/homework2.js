function palindrome(str) {
  const len = str.length;
  for (let a = 0; a < len / 2; a++) {
    if (str[a] != str[len - 1 - a]) return false;
  }
  return true;
}
