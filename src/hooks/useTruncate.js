export default function useTrucate(string, length) {
  return string.length > length ? `${string.slice(0, length)}...` : string;
}
