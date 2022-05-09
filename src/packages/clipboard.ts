import { logError } from "../utils/Error";
import typeOf from "./typeOf";

export const clipboard = ({
  text,
  target
}: {
  text?: string | number,
  target?: HTMLElement
}) => {

  if (!text && !target) {
    return;
  }

  if(!!text && !['number', 'string'].includes(typeOf(text)!)) {
    return logError(`You cannot pass in anything other than number and string! var text type is ${ typeOf(text) }`)
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

  input.value = (!!text ? text : target!.innerText) as string;
  input.select();
  document.execCommand("copy");

  document.body.removeChild(input);
};

export default clipboard