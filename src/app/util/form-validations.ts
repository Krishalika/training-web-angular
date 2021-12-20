export function isEmpty(str : string) : boolean {
  return (str === undefined || str == null || str.trim().length <= 0);
}
