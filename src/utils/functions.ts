export function addEllipsisOnStringBiggerThan50(word: string) {
  if (word.length > 50) return word.substring(0, 50).concat("...");
  return word;
}
