export function reverseString(string) {
  let list = string.split('');
  list = list.reverse();
  return list.join('');
}