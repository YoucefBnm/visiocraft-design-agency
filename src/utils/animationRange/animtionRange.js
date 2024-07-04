export function animationRange(index, arrayLength) {
  const start = index / arrayLength;
  const end = start + 1 / arrayLength;

  return {
    start,
    end,
  };
}
