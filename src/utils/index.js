export const renderElementToPosition = (activeElement, position, element) => {
  const activeEl = document.querySelector(activeElement);
  activeEl.insertAdjacentHTML(position, element);
};
