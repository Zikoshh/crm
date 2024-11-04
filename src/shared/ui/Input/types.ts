import { FC, InputHTMLAttributes } from 'react';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: boolean;
  success?: boolean;
  size?: 's' | 'm' | 'l';
  errorMessage?: string;
  leftAdornment?: FC;
  rightAdornment?: FC;
  dispatch?: (
    type: 'SET_VALUE' | 'RESET',
    action?: { payload: string }
  ) => void;
}
