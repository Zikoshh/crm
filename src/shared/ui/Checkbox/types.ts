import { InputHTMLAttributes } from 'react';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size: 's' | 'm';
  label?: string;
  className?: string;
}
