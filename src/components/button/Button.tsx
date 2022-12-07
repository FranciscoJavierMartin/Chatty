import { MouseEventHandler } from 'react';

interface ButtonProps {
  label: string | JSX.Element;
  className: string;
  disabled: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  label,
  className,
  disabled,
  handleClick,
  type = 'button',
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
