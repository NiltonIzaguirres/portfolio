import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export function Input({ value, placeholder, onChange, ...rest }: InputProps) {
  return (
    <InputContainer>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </InputContainer>
  );
}
