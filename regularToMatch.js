const log = console.log

const isMatch = function (s, p) {
  if (p === '.*' || s === p) {
    return true
  }
  let len = p.length;
  let slen = s.length;
  let last = s[slen - 1];
  let index = 0;
  for (let i = 0; i < slen; i++) {
    if (!match(s[i], i)) {
      return false
    }
  }

  function match(c, i) {
    if (c === p[index] || p[index] === '.') {
      if (i + 1 === slen) {
        if (p[index + 1] === '*') {
          index += 2
        } else {
          index++
        }
      } else if (p[index + 1] && p[index + 1] !== '*') {
        index++
      }
      if (index >= len) {
        return false;
      }
      return true;
    } else {
      if (p[index + 1] === '*' && index < len - 2) {
        index += 2
        return match(c, i)
      } else {
        return false
      }
    }
  }

  const piece = p.slice(index, len)
  switch (piece) {
    case '':
      return true;
    case '.':
      return true;
    case '.*':
      return true;
    case last:
      return true;
    case last + '*':
      return true
  }
  return false

}

var a = isMatch("aa", "a")
log(a)
