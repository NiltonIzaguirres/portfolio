import { HTMLAttributes, useState } from "react";
import {
  IoOptions,
} from "react-icons/io5";
import { DropdownMenuContainer } from "./styles";

interface OptionProps {
  icon: JSX.Element;
  value: string;
}

interface DropdownMenuProps extends HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  currentOption: string;
  optionChange: (option: string) => void;
  options: OptionProps[];
}

export function DropdownMenu({
  placeholder,
  currentOption,
  optionChange,
  options,
  ...rest
}: DropdownMenuProps) {
  const [showOptions, setShowOptions] = useState(false);

  function handleOptionChange(option: string) {
    optionChange(option);
    setShowOptions(false);
  }

  return (
    <DropdownMenuContainer showOptions={showOptions}>
      <input
        type="text"
        placeholder={placeholder}
        value={currentOption}
        onClick={() => setShowOptions(!showOptions)}
        readOnly
        {...rest}
      />
      <div>
        <div onClick={() => handleOptionChange("")}>
          <IoOptions />
          <span>Todas as categorias</span>
        </div>
        {options
          .sort((a, b) => (a.value > b.value ? 1 : -1))
          .map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionChange(option.value)}
            >
              {option.icon}
              <span>{option.value}</span>
            </div>
          ))}
      </div>
    </DropdownMenuContainer>
  );
}
