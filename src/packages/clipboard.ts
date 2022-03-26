export const clipboard = (
  text?: string,
  target?: HTMLElement
) => {
  if (!text && !!target) {
    return;
  }

  const input = document.createElement("input");

  input.setAttribute(
    "style",
    `
      position: absolute;
      top: -99999em
    `
  );

  document.body.appendChild(input);

  input.value = !!text ? text : target!.innerText;
  input.select();
  document.execCommand("copy");

  document.body.removeChild(input);
};

export default clipboard