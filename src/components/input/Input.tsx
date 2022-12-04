import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import './Input.scss';

interface InputProps {
  name: string;
  type: HTMLInputTypeAttribute;
  value: string;
  className?: string;
  label?: string;
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  name,
  type,
  value,
  label,
  className,
  placeholder,
  handleChange,
}: InputProps): JSX.Element {
  return (
    <div className='form-row'>
      {label && (
        <label htmlFor={name} className='form-label'>
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`form-input ${className}`}
        autoComplete='false'
      />
    </div>
  );
}
