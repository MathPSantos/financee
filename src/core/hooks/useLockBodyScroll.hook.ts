import { lockBodyScroll, unlockBodyScroll } from "../utils/lockBody";

export function useLockBodyScrool(value: boolean) {
  value ? lockBodyScroll() : unlockBodyScroll();
}
