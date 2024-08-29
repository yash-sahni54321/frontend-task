export function isMobile() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return false;
  }

  const match = window.matchMedia('(pointer: coarse)');
  return match && match.matches;
}
