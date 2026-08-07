export function toUpperCase(str) {
  return str
    .split(' ')
    .map((el) => el.toUpperCase())
    .join(' ');
}

export function toDash(str) {
  return str.split(' ').join('-');
}
