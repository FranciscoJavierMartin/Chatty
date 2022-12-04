import { MouseEventHandler } from 'react';

interface ButtonProps {
  label: string | JSX.Element;
  className: string;
  disabled: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  label,
  className,
  disabled,
  handleClick,
}: ButtonProps): JSX.Element {
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {label}
    </button>
  );
}
