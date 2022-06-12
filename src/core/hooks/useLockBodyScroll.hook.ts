export function useLockBodyScrool(value: boolean) {
  function lockBodyScroll() {
    document.body.classList.add("overflow-hidden");
  }

  function unlockBodyScroll() {
    document.body.classList.remove("overflow-hidden");
  }

  value ? lockBodyScroll() : unlockBodyScroll();
}
