export function useIsTouchdevice() {
  const detectTouch = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  };
  return detectTouch();
}
