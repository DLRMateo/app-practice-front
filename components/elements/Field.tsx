import cls from "classnames";
import { forwardRef } from "react";

export interface IField {
  id?: string;
  name?: string;
  value?: string;
  isDisabled?: boolean;
  placeholder?: string;
  error?: string;
  isError?: boolean;
  onChange?: (value: string) => void;
  title?: string;
}

const Field = forwardRef<HTMLInputElement, IField>((props, propRef) => {
  const {
    value, placeholder, isError, onChange, title
  } = props
  return (
    <input
      ref={propRef}
      value={value}
      onChange={(ev) => {
        return onChange?.(ev.target.value ?? "");
      }}
      type={title}
      placeholder={placeholder}
      className={cls(isError && "border-2 border-red-500")}
    />
  )
})

Field.displayName = "Field"
export default Field
