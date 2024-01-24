import { ChangeEventHandler, FC, HTMLAttributes, useRef, useState } from "react";
import { classes } from "engine";

import style from "./Textarea.module.css";

interface Textarea extends Omit<HTMLAttributes<HTMLSpanElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
};

const Textarea: FC<Textarea> = ({
  className,
  value,
  onChange,
  children,
  ...prevProps
}) => {

  const textareaHeight = useRef<number>();

  const handlersTextarea: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const textareaEl = event.currentTarget;
    if (!textareaEl) { return; }

    if (textareaEl.offsetParent) {
      textareaEl.style.height = "";
      textareaEl.style.height = `${textareaEl.scrollHeight}px`;

      if (textareaEl.scrollHeight !== textareaHeight.current) {
        textareaHeight.current = textareaEl.scrollHeight;
      }
    }

    onChange && onChange(event.currentTarget.value);
  }

  return (
    <div className={style.Textarea}>
      <textarea
        spellCheck={true}
        inputMode={"text"}
        placeholder={"id пользователя"}
        onChange={handlersTextarea}
        value={value}
      />
    </div>
  )
}


export default Textarea;