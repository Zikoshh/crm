import { InputHTMLAttributes } from 'react';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size: 's' | 'm' | 'l';
  label?: string;
  className?: string;
}
