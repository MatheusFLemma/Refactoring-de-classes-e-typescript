import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

export interface IInputProps {
  name: string;
  placeholder?: string;
  icon?: ComponentType<IconBaseProps>;
}

export interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}
