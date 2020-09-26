export function getNameAcronym(name: string) {
  return name
    .split(' ')
    .slice(0, 3)
    .map(str => str[0])
    .join('');
}